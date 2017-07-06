package ca.six.ndk101;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Example of a call to a native method
        TextView tv = (TextView)findViewById(R.id.sample_text);
        StringBuilder sb = new StringBuilder();
        sb.append(stringFromJNI()+"\n");
        sb.append(getValue(23)+"\n");
        tv.setText(sb.toString());
    }

    public native String stringFromJNI();
    public native String getValue(int key);

    static {
        System.loadLibrary("native-lib");
    }
}
