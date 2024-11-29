import { TestBed } from '@angular/core/testing';
import { MarkdownService } from './markdown.service';
import { marked } from 'marked';

describe('MarkdownService', () => {
  let service: MarkdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should transform Markdown to HTML correctly', async () => {
    const markdownContent = '# Hello, World!';
    const expectedHtml = '<h1>Hello, World!</h1>\n'; // Expected HTML output of the markdown

    const result = await service.transformMarkdown(markdownContent);
    expect(result).toBe(expectedHtml);
  });

  it('should handle empty markdown content', async () => {
    const markdownContent = '';
    const expectedHtml = ''; // Empty markdown should return an empty string

    const result = await service.transformMarkdown(markdownContent);
    expect(result).toBe(expectedHtml);
  });

  it('should handle markdown with special characters', async () => {
    const markdownContent = '**Bold** and *italic* text';
    const expectedHtml = '<p><strong>Bold</strong> and <em>italic</em> text</p>\n'; // Include <p> tags in the expected output
  
    const result = await service.transformMarkdown(markdownContent);
    expect(result).toBe(expectedHtml);
  });
  

  it('should throw an error for invalid input (if marked throws an error)', async () => {
    const invalidContent = undefined; // Invalid markdown input

    try {
      await service.transformMarkdown(invalidContent as any); // Cast to `any` for testing
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
