
class Subject {
    constructor() {
      this.observers = [];
      this.imageLoaded = false;
    }

    addObserver(observer) {
      this.observers.push(observer);
    }

    notifyObservers() {
      for (const observer of this.observers) {
        observer.update();
      }
    }

    observeImages(obj) {
      const images = document.querySelectorAll(obj);
      images.forEach((image) => {
        const src = image.getAttribute("data-src");
        // const newImage = new Image();
        // newImage.src = src;
        // newImage.onload = () => {
          setInterval(() => {
            image.src = src;
            image.removeAttribute("data-src");
            this.checkImageLoadingComplete(obj);
          }, 3000);
        // };
      });
    }

    checkImageLoadingComplete(obj) {
      const images = document.querySelectorAll(obj);
      if (images.length === 0) {
        this.imageLoaded = true;
        this.notifyObservers();
      }
    }
  }

  class Observer {
    constructor(name) {
      this.name = name;
    }

    update() {
      console.log(`${this.name} 收到通知，圖片已載入`);
      // 在這裡進行相應的DOM操作或其他處理
    }
  }

  const subject = new Subject();
  const observer = new Observer("觀察者");

  subject.addObserver(observer); // 註冊觀察者

  subject.observeImages("img[data-src]"); // 開始觀察DOM元素的圖片延遲載入