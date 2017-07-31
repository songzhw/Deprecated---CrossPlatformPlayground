package ca.six.ndk101;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

import ca.six.ndk101.model.NoSuchPlayerException;
import ca.six.ndk101.model.Player;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        setValue(33, new Player(33, "Shark"));
        setValue(13, new Player(13, "Songzhw"));


        TextView tv = (TextView)findViewById(R.id.sample_text);
        StringBuilder sb = new StringBuilder();
        try {
            sb.append(getValue(23) + "\n");
        } catch (Exception e) {
            sb.append("no 23 player"+"\n");
        }
        try {
            sb.append(getValue(13) + "\n");
        } catch (Exception e) {
            sb.append("no 13 player"+"\n");
        }
        try {
            sb.append(getValue(1) + "\n");
        } catch (Exception e) {
            sb.append("no 1 player"+"\n");
        }
        tv.setText(sb.toString());
    }

    public native Player getValue(int key) throws NoSuchPlayerException;
    public native void setValue(int key, Player value);

    static {
        System.loadLibrary("native-lib");
    }
}
