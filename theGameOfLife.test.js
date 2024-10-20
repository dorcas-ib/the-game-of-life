const { verifyCell } = require('./theGameOfLife.js');

describe("Game of life requirement", () => {
  it("Any live cell with fewer than two live neighbours dies as if by under population.", () => {
    const result = verifyCell(1, 1);
    expect(result).toBe(0);
  })
  it("Any live cell with more than three live neighbours dies, as if by overcrowding.", () => {
    const result = verifyCell(1, 4);
    expect(result).toBe(0);
  })
  it("3. Any live cell with two live neighbours lives on to the next generation.", () => {
    const result = verifyCell(1, 2);
    expect(result).toBe(1);
  })
  it("3. Any live cell with three live neighbours lives on to the next generation. ", () => {
    const result = verifyCell(1, 3);
    expect(result).toBe(1);
  })
  it("4. Any dead cell with exactly three live neighbours becomes a live cell. ", () => {
    const result = verifyCell(0, 3);
    expect(result).toBe(1);
  })
})


// namofile.js
// nameoffile.test.js

