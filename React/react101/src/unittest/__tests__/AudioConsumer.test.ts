import AudioConsumer from "../AudioConsumer";

const mockPlayFunc = jest.fn();
jest.mock("../AudioPlayer", () => {
  return jest.fn().mockImplementation(() => {
    return { play: mockPlayFunc };
  });
});

describe("mock a class", () => {
  test("test", () => {
    const consumer = new AudioConsumer();
    consumer.playAudio();
    expect(mockPlayFunc).toBeCalledWith("song.mp3");
  });
});
