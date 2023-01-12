import Block from "./Block"

type ReceiveText = { receive: string }

class TestComponent extends Block<ReceiveText> {
  render(): string {
    return `
      <div class="first-block">
        <div class="second-block">
          {{receive}}
        </div>
      </div>
    `;
  }
}
const getComponent = () => new TestComponent({ receive: "test component" })

describe("./Block", () => {
  test("render element", () => {
    expect(getComponent().element).not.toBeNull()
  })
  test("renders text", () => {
    const takeElement = getComponent().element?.querySelector(".second-block")
    expect(takeElement?.textContent).toContain("test component")
  })
  test("render inner", () => {
    const takeElement = getComponent().element?.querySelector(".second-block")
    expect(takeElement).not.toBeNull()
  })
})
