'use strict';

import * as vscode from 'vscode';
import { ConfigHandler } from '../configuration/confighandler';

export class TextOperations
{
	public static getCurrentLine(iText: string, iLine: number): string
	{
		if( iText === undefined || iText === "" )
			return "";

		let raw = iText;
		let end = raw.length;
		let start = 0;
		let tmp = "";
		let newLine = false;
		let txt: string[] = [];
		while(start<=end)
		{
			if( raw[start] === '\n' || raw[start] === '\r' )
			{
				txt.push(tmp);
				if( txt.length > iLine )
					break;
				tmp = "";
				if( start+1 < end )
				{
					if( raw[start] === '\r' && raw[start+1] === '\n' )
						start++;
				}
			}
			else if(start == end){
				txt.push(tmp)
			}
			else
			{
				tmp += raw[start];
			}
			start++;
		}
		if( txt && txt.length > iLine )
		{
			return txt[iLine];
		}
		return "";
	}

	public static getPathAndLineNumber(iWord:string): any
	{
		let fileAndLine = {
			file: iWord,
			line: -1
		};
		
		if (fileAndLine.file.lastIndexOf(":") > -1) {
			const lPos = iWord.lastIndexOf(":");
			fileAndLine.file = iWord.substring(0, lPos);
			fileAndLine.line = parseInt(iWord.substring(lPos+1));
			if( isNaN(fileAndLine.line) )
			{
				fileAndLine.file = (iWord.length === lPos+1 ? iWord.substring(0,lPos) : iWord);
				fileAndLine.line = -1;
			}
		}
		return fileAndLine;
	}
	public static getWordBetweenBounds(iText: string, iPos:vscode.Position, iBounds?:RegExp): string
	{
		let bounds: RegExp = ConfigHandler.Instance.Configuration.Bound;
		if( iText === undefined || iText === "" )
			return "";
		if( iBounds !== undefined )
			bounds = iBounds;
		let end = iText.length;
		let i = iPos.character;
		let j = iPos.character;
		if( end < i )
			return "";

		for(; i>=0; i--)
		{
			let t = iText[i];
			if( t.match(bounds) !== null )
			{
				i++;
				break;
			}
		}
		for(; j<end; j++)
		{
			let t = iText[j];
			if( t.match(bounds) !== null )
				break;
		}
		return iText.substring(i,j);

	}
	
	public static getWordOfSelection(iText: string, iSelection:vscode.Selection): string
	{
		let bounds: RegExp = ConfigHandler.Instance.Configuration.Bound;
		if( iText === undefined || iText === "" )
			return "";
		return iText.substring(iSelection.start.character,iSelection.end.character);

	}
}