// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("smalltalk",function(a){a.push(["self","super","true","false","nil"],{klass:"constant"});a.push(["[","]","|",":=","."],{klass:"operator"});a.push({pattern:/\w+:/g,klass:"function"});a.push(Syntax.lib.camelCaseType);a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.hexNumber)});
