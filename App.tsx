import React, { useState } from 'react';
import { Button, Card, Provider } from '@ant-design/react-native';
import { Image, Text, View } from 'react-native';

export default function App() {
  return (
    <Provider>
      <View style={{ padding: 10 }}>
        <TestCard />
        <TestButton />
      </View>
    </Provider>
  );
}

function TestButton() {
  const initialTitle = 'Press me';
  // const { updateTheme } = useContext(ThemeContext);
  const [title, setTitle] = useState<string>(initialTitle);
  const toggle = title === initialTitle;

  return (
    <Button
      type="primary"
      onPress={() => {
        setTitle(toggle ? 'I am pressed' : initialTitle);
      }}
    >
      {title}
    </Button>
  );
}

function TestCard() {
  return (
    <Card>
      <Card.Header title={'Test Card'} />
      <Card.Body>
        <Image
          style={{ height: 200, width: '100%' }}
          resizeMode="cover"
          source={{
            uri:
              'https://media.idownloadblog.com/wp-content/uploads/2020/06/macOS-Big-Sur-Daylight-Wallpaper-iDownloadBlog-2048x2048.jpg',
          }}
        />
        <Text>
          Ant design has most components out of all libraries. However, it is
          way less popular than the others.
        </Text>
        <Button style={{ marginTop: 20 }} disabled>
          I am disabled and I also change with theme
        </Button>
      </Card.Body>
    </Card>
  );
}
