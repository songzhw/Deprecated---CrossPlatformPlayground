import VideoConsumer from "../VideoConsumer";
import VideoPlayer from "../VideoPlayer";

jest.mock("../VideoPlayer");

// @ts-ignore
VideoPlayer.mockImplementation(() => {
  return {
    play: () => {
      throw new Error("test error");
    }
  };
});

describe("test video player", () => {
  test("expect error", () => {
    const consumer = new VideoConsumer();
    expect(() => consumer.playVideo()).toThrow();
  });
});
