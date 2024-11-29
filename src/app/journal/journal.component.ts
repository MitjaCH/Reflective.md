import { Component, inject } from '@angular/core';
import { MarkdownService } from '../services/markdown.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  private mdService = inject(MarkdownService);

  rawMarkdown: string = `# Welcome to Reflective.md
  This is **bold** text and this is *italic* text.

  - Item 1
  - Item 2

  [Visit Google](https://www.google.com)

  \`\`\`
  let x = 10;
  \`\`\``;

  htmlContent: string = '';

  async ngOnInit() {
    this.htmlContent = await this.mdService.transformMarkdown(this.rawMarkdown);
  }
}
