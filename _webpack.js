/**
 * 引：
 * 作者：null仔
 * 链接：https://juejin.im/post/5e116fce6fb9a047ea7472a6
 * 来源：掘金
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

const path = require('path')
const fse = require('fs-extra')
const { parse } = require('@babel/parser')
const { transformFromAstSync } = require('@babel/core')
const traverse = require('@babel/traverse').default

const webpackOptions = {
	entry: path.resolve(__dirname, './test.js'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'test.bundle.js',
	},
}

class Parser {
	getAst(path) {
		const file = fse.readFileSync(path, 'utf-8')
		const ast = parse(file, {
			sourceType: 'module',
		})
		return ast
	}

	getDependecies(ast, filename) {
		const dirname = path.dirname(filename)
		const dependenciesMap = new Map()

		traverse(ast, {
			ImportDeclaration({ node }) {
				const importPath = node.source.value
				const filePath = path.resolve(dirname, importPath)

				dependenciesMap.set(importPath, filePath)
			},
		})

		return dependenciesMap
	}

	getCode(ast) {
		const { code } = transformFromAstSync(ast, null, {
			presets: [
				[
					'@babel/preset-env',
					{
						useBuiltIns: 'usage',
						modules: false,
						corejs: 3,
					},
				],
			],
			plugins: [['@babel/plugin-transform-runtime']],
		})
		// fse.writeFileSync('./test3.js', code)
		// console.log('code', code)

		return code
	}
}

class Compiler {
	constructor(options) {
		const { entry, output } = options

		this.entry = entry
		this.output = output
		this.modules = []

		this.parser = new Parser()
	}

	run() {
		const entryInfo = this.build(this.entry)

		this.modules.push(entryInfo)

		entryInfo.dependeciesMap.forEach(path => {
			this.modules.push(this.build(path))
		})

		const dependecyGraph = this.modules.reduce(
			(graph, curr) => ({
				...graph,
				[curr.filepath]: {
					code: curr.code,
					dependeciesMap: curr.dependeciesMap,
				},
			}),
			{},
		)
		// console.log(dependecyGraph)

		this.generate(dependecyGraph)
	}

	build(filepath) {
		const { getAst, getCode, getDependecies } = this.parser

		const ast = getAst(filepath)
		const dependeciesMap = getDependecies(ast, filepath)
		const code = getCode(ast)

		return {
			code,
			filepath,
			dependeciesMap,
		}
	}

	generate(graph) {
		const outputFilePath = path.join(this.output.path, this.output.filename)
		const bundle = `(function(graph){      
      function require(module){        
        function localRequire(relativePath){          
          return require(graph[module].dependecies[relativePath])        
        }        
        var exports = {};        
        (function(require,exports,code){          
          eval(code)        
        })(localRequire,exports,graph[module].code);        
        return exports;      
      }      
      require('${this.entry}')    
    })(${JSON.stringify(graph)})`

		fse.writeFileSync(outputFilePath, bundle)
	}
}

new Compiler(webpackOptions).run()
