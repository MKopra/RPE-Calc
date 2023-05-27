function getCanvasContext(): CanvasRenderingContext2D | null {
    const canvas = document.getElementById('my-canvas') as HTMLCanvasElement;
    if (canvas) {
      return canvas.getContext('2d');
    }
    return null;
  }
  
  export default function handleImageLoad(event: React.SyntheticEvent<HTMLImageElement>) {
    const img = event.currentTarget;
    const canvas = document.createElement("canvas");
    const ctx: CanvasRenderingContext2D | null = getCanvasContext();
  
    if (ctx !== null) {
      ctx.fillRect(0, 0, 100, 100);
  
      // set the canvas dimensions to match the image's
      canvas.width = img.width;
      canvas.height = img.height;
  
      // draw the image onto the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
      // compress the image by reducing its quality
      const quality = 0.5; // adjust this to change the quality level
      const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
  
      // update the image source to the compressed data URL
      img.src = compressedDataUrl;
    }
  }
  