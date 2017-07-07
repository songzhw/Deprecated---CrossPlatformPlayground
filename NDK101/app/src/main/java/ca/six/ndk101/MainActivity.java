package ca.six.ndk101;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

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
        sb.append(getValue(23)+"\n");
        sb.append(getValue(13)+"\n");
        sb.append(getValue(1)+"\n"); //=> get a null
        tv.setText(sb.toString());
    }

    public native Player getValue(int key);
    public native void setValue(int key, Player value);

    static {
        System.loadLibrary("native-lib");
    }
}
