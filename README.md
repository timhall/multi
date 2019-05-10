# @timhall/multi

For background on the approaches used here, see [Case Study: Multiselect](https://timhall.dev/articles/multiselect).

```jsx
import React, { useState } from 'react';
import { Select, Option } from '@timhall/multi';

export function Form() {
  const [value, setValue] = useState([]);

  return (
    <form>
      <Select multiple value={value} onChange={setValue}>
        <Option value="a">A</Option>
        <Option value="b">B</Option>
        <Option value="c">C</Option>
      </Select>
    </form>
  )
}
```

```jsx
import { useMulti } from '@timhall/multi';
import { Popup, Container, usePopup } from '@timhall/popup';
import { TagList, Button, Menu } from '@acme/design-system';

export function Select(props) {
  const { value, children: options } = props;
  const popup = usePopup();
  const multi = useMulti(value, options);

  return (
    <Container {...multi.control}>
      <TagList {...multi.list} />
      <Button {...popup.control}>TOGGLE</Button>
      <Popup {...popup.target}>
        <Menu {...multi.menu} />
      </Popup>
    </Container>
  )
}
```
