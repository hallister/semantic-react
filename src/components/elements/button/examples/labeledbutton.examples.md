# Labeled Button

        <LabeledButton label="Oh uh">
            Like me
        </LabeledButton>

## With button icon and label

    <LabeledButton label="Oh uh">
        <Icon name="heart"/>
        Like me
    </LabeledButton>


## By default label placement is the right, you can change it to left side

    <div>
        <LabeledButton label="Oh uh" labeled="right">
            <Icon name="heart"/>
            Like me
        </LabeledButton>

        <LabeledButton label="Oh no" labeled="left">
            <Icon name="heart"/>
            Hate me
        </LabeledButton>
    </div>

## You can control label by passing labelComponent

        <LabeledButton label="Oh no"
                       labeled="left"
                       labelComponent={(props) => <Label basic color="blue" {...props}/>}
        >
            Custom label
        </LabeledButton>

## You can have icon instead as label

    <div>
        <LabeledButton labelType="icon" label="cloud">
            Icon Labeled button
        </LabeledButton>
        <LabeledButton labelType="icon" label="cloud" labeled="left">
            Icon Labeled button
        </LabeledButton>
    </div>

## You can pass other Button props to the LabeledButton

    <div>
        <LabeledButton color="red" circular label="Oh uh" labeled="right">
            <Icon name="heart"/>
            Like me
        </LabeledButton>
        <LabeledButton color="green" state="disabled" labelType="icon" label="cloud" labeled="left">
            Icon Labeled button
        </LabeledButton>
    </div>

## Control icon for icon labeled button

        <LabeledButton label="cloud"
                       labelType="icon"
                       labelComponent={(props) => <Icon size="big" color="red" {...props}/>}
        >
            Custom icon
        </LabeledButton>
