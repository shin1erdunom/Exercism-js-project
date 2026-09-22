// @ts-nocheck

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 * @param {number } [width]
 * @param {number } [height]
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}
Size.prototype.resize = function (
  /** @type {number | undefined} */ width,
  /** @type {number | undefined} */ height,
) {
  this.width = width;
  this.height = height;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

export class ProgramWindow {
  constructor(screenSize, size, position) {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(size){
    if(size.width>=1 || size.height>=1){
        let MaxHeight = this.screenSize.height - this.position.y
        let MaxWidth = this.screenSize.width - this.position.x
        if (size.width >= MaxWidth) {
            this.size.width = MaxWidth
        }else{
            this.size.width = size.width;
        }
        if (size.height >= MaxHeight) {
            this.size.height = MaxHeight
        }else{
            this.size.height = size.height;
        }
    }
    if (size.width < 1) {
        this.size.width = 1
    }
    if (size.height < 1 ) {
        this.size.height = 1
    }
  }

  move(position) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    let newX = Math.max(0, position.x);
    newX = Math.min(newX, maxX);

    let newY = Math.max(0, position.y);
    newY = Math.min(newY, maxY);

    this.position.move(newX, newY);
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}