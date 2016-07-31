# Rating

```example
initialState = { value: 0 };
<Rating value={state.value} max={7} onChange={(val) => setState({ value: val })}/>
```

## Star rating

```example
initialState = { value: 0 };
<Rating type="star" value={state.value} max={7} onChange={(val) => setState({ value: val })}/>
```

## Heart rating

```example
initialState = { value: 0 };
<Rating type="heart" value={state.value} max={7} onChange={(val) => setState({ value: val })}/>
```

## Sizes

```example
<Segment>
    <Rating type="star" size="mini" max={5}/>
    <br/>
    <Rating type="star" size="tiny" max={5}/>
    <br/>
    <Rating type="star" size="small" max={5}/>
    <br/>
    <Rating type="star" size="medium" max={5}/>
    <br/>
    <Rating type="star" size="large" max={5}/>
    <br/>
    <Rating type="star" size="big" max={5}/>
    <br/>
    <Rating type="star" size="huge" max={5}/>
    <br/>
    <Rating type="star" size="massive" max={5}/>
</Segment>
```
