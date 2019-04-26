import SoundPlayerConsumer from "../SoundPlayerConsumer";
import SoundPlayer from "../SoundPlayer";

// SoundPlayer is now a mock constructor
jest.mock("../SoundPlayer");　

describe("test exported class", () => {
  beforeEach(() => {
    // @ts-ignore
    SoundPlayer.mockClear();
  });

  test("构造函数被调用了", () => {
    const consumer = new SoundPlayerConsumer();
    expect(SoundPlayer).toBeCalledTimes(1);
  });

  test("Consumer让Player在工作了", () => {
    const consumer = new SoundPlayerConsumer();
    consumer.playSomethingCool();
    // @ts-ignore
    const mockPlayer = SoundPlayer.mock.instances[0];
    const mockPlayFunc = mockPlayer.playSoundFile;
    expect(mockPlayFunc).toBeCalledWith("song.mp3");
  });
});


