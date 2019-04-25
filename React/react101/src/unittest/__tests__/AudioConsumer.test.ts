import AudioConsumer from "../AudioConsumer";

const fakePlayFunc = jest.fn();
jest.mock("../AudioPlayer", () => {
  return jest.fn().mockImplementation(() => {
    return { play: fakePlayFunc };
  });
});

describe("mock a class", () => {
  test("test", () => {
    const consumer = new AudioConsumer();
    consumer.playAudio();
    expect(fakePlayFunc).toBeCalledWith("song.mp3");
  });
});
