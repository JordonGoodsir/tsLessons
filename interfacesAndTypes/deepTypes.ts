interface Directory {
    addFile: (name: string) => void; 
    config: {
      default: {
        encoding: string,
        permissions: string,
      }
    }
    
  }
  
  class DesktopDirectory1 implements Directory {
    config = {
      default: {
        encoding: 'utf-8',
        permissions: 'drw-rw-rw-',
      }
    }
  
    addFile(name: string) {
      console.log(`Adding file: ${name}`);
    }
  
    showPreview(name: string) {
      console.log(`Opening preview of file: ${name}`);
    }
  }
  
  const Desktop1 = new DesktopDirectory1();
  
  console.log(Desktop1.config);