import * as babel from "@babel/core"
import * as fs from "fs"
import * as p from "path"

const originPath = p.join(__dirname, "origin.ts")
const destPath = p.join(__dirname, "dest.js")

const originCode = fs.readFileSync(originPath).toString()

const result = babel.transform(originCode, {
  presets: ['@babel/preset-env'],
})

fs.writeFileSync(destPath, result?.code || "")
