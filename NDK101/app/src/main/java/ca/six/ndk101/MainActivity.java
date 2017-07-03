package ca.six.ndk101;

import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView tv = (TextView) findViewById(R.id.sample_text);

        setId("key", 35);
        tv.setText(stringFromJNI() + " ; " + getId("key"));
    }


    // Used to load the 'native-lib' library on application startup.
    static {
        System.loadLibrary("native-lib");
    }

    public native String stringFromJNI();

    public native int getId(String key);

    public native void setId(String key, int id);

}
