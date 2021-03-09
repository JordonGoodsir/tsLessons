interface Directory{ 
    addFile:(name:string) => void
  }
  
  class DesktopDirectory7 implements Directory {
    addFile(name: string) {
      console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
    }
  }
  
  const Desktop = new DesktopDirectory7();
  
  Desktop.addFile('lesson-notes.txt');
  Desktop.showPreview('lesson-notes.txt');