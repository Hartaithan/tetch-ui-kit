import { FC } from "react";
import { Button, Display, Text } from "tetch-ui-kit";

const App: FC = () => {
  return (
    <>
      <h1>Tetch UI Kit Demo!</h1>
      <div>
        <h3>Text Component</h3>
        <Text>Default</Text>
        <Text size="text-sm">Text Small</Text>
        <Text size="text-xl">Text Large</Text>
      </div>
      <div>
        <h3>Display Component</h3>
        <Display>Default</Display>
        <Display size="display-xs">Display Extra Small</Display>
        <Display size="display-xl">Display XL</Display>
      </div>
      <div>
        <h3>Button Component</h3>
        <Button size="sm">Hello World!</Button>
        <Button size="md">Hello World!</Button>
        <Button size="lg">Hello World!</Button>
        <Button size="xl">Hello World!</Button>
        <Button size="xxl">Hello World!</Button>
      </div>
    </>
  );
};

export default App;
