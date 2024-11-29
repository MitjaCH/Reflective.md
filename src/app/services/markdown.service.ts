import { Injectable } from '@angular/core';
import { marked } from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {

  constructor() { }

  // Transform Markdown to HTML using `marked` (assuming it is asynchronous)
  async transformMarkdown(mdContent: string): Promise<string> {
    try {
      return await marked(mdContent); // Using async/await for Promise handling
    } catch (error) {
      throw new Error('Error processing markdown: ' + error);
    }
  }
}
