## Public, private, and protected modifiers

### Public by default

### Private

`private`, cannot be accessed from outside of its containing class.

### Protected

```ts
class Component {
  protected props: any;
  protected constructor(props: any) {
    this.props = props;
  }
}

class MyComponent extends Component {
  public constructor(props: any) {
    super(props);
  }

  public test() {
    return this.props;
  }
}
```
