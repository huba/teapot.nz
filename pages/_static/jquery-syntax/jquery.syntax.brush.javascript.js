// This file is part of the "jQuery.Syntax" project, and is distributed under the MIT License.
// Copyright (c) 2011 Samuel G. D. Williams. <http://www.oriontransfer.co.nz>

Syntax.register("javascript",function(a){a.push(["this","true","false","null"],{klass:"constant"});a.push("function break case catch continue default delete do else for if in instanceof new return super switch throw true try typeof var while with prototype".split(" "),{klass:"keyword"});a.push("+*/-&|~!%<=>".split(""),{klass:"operator"});a.push(Syntax.lib.perlStyleRegularExpression);a.push(Syntax.lib.camelCaseType);a.push(Syntax.lib.cStyleComment);a.push(Syntax.lib.cppStyleComment);a.push(Syntax.lib.webLink);
a.push(Syntax.lib.singleQuotedString);a.push(Syntax.lib.doubleQuotedString);a.push(Syntax.lib.stringEscape);a.push(Syntax.lib.decimalNumber);a.push(Syntax.lib.hexNumber);a.push(Syntax.lib.cStyleFunction)});
