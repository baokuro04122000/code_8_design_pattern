abstract class HtmlTag {  
  public abstract getTagName():string;  

  public abstract setStartTag(tag: string):void;  

  public abstract setEndTag(tag: string):void;  

  public setTagBody(tagBody:string):void {  
      throw Error("Current operation is not support for this object");  
  }  

  public addChildTag(htmlTag: HtmlTag):void {  
      throw Error("Current operation is not support for this object");  
  }  

  public removeChildTag(htmlTag: HtmlTag) {  
      throw Error("Current operation is not support for this object");  
  }  

  public getChildren():Array<HtmlTag> {  
      throw Error("Current operation is not support for this object");  
  }  

  public abstract generateHtml():void;  
}

class HtmlParentElement extends HtmlTag {  
  private tagName: string;  
  private startTag: string;  
  private endTag: string;  
  private childrenTag: Array<HtmlTag>;  

  constructor(tagName: string){
      super();
      this.tagName = tagName;  
      this.startTag = "";  
      this.endTag = "";  
      this.childrenTag = [];
  }
  public getTagName():string {  
      return this.tagName;  
  }  
  public setStartTag(tag: string):void {  
      this.startTag = tag;  
  }  
  public setEndTag(tag: string):void {  
      this.endTag = tag;  
  }  
  public addChildTag(htmlTag: HtmlTag):void {  
      this.childrenTag.push(htmlTag);  
  }  
  public removeChildTag(htmlTag: HtmlTag):void {  
      this.childrenTag.filter(item => item==htmlTag);  
  }  
  public  getChildren(): Array<HtmlTag> {  
      return this.childrenTag;  
  }  
  public generateHtml():void {  
      console.log(this.startTag);
      this.childrenTag.forEach(tag=>{
        tag.generateHtml()
      })  
        
      console.log(this.endTag);  
  }  
}

class HtmlElement extends HtmlTag {  
  private tagName: string;  
  private startTag: string;  
  private endTag: string;  
  private tagBody: string;  

  constructor(tagName: string) {
      super()  
      this.tagName = tagName;  
      this.tagBody = "";  
      this.startTag = "";  
      this.endTag = "";  
  }  
  
  public getTagName(): string {  
      return this.tagName;  
  }  
  
  public setStartTag(tag: string):void {  
      this.startTag = tag;  
  }  

  public setEndTag(tag: string): void {  
      this.endTag = tag;  
  }  

  public setTagBody(tagBody: string): void {  
      this.tagBody = tagBody;  
  }  

  public generateHtml(): void {  
      console.log(this.startTag + "" + this.tagBody + "" + this.endTag);  
  }  
}
const parentTag: HtmlTag = new HtmlParentElement("<html>");  
  parentTag.setStartTag("<html>");  
  parentTag.setEndTag("</html>");  

const  p1: HtmlTag = new HtmlParentElement("<body>");  
  p1.setStartTag("<body>");  
  p1.setEndTag("</body>");  

  parentTag.addChildTag(p1);  

let  child1: HtmlTag = new HtmlElement("<p>");  
  child1.setStartTag("<p>");  
  child1.setEndTag("</p>");  
  child1.setTagBody("Testing html tag library");  
  p1.addChildTag(child1);  

  child1 = new HtmlElement("<p>");  
  child1.setStartTag("<p>");  
  child1.setEndTag("</p>");  
  child1.setTagBody("Paragraph 2");  
  p1.addChildTag(child1);  

  parentTag.generateHtml(); 