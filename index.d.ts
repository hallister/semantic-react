///<reference types="react"/>

import * as React from "react";

export interface BaseProps {
    /**
     * Additional CSS ui classes
     */
    className?: string;
    /**
     * Use other component for composing results: <DropdownMenu component={Button}>
     */
    component?: React.ReactType;
    /**
     * Apply default semantic UI classes for component, for example ui button
     * @default true
     */
    defaultClasses?: boolean;
    /**
     * Apply style. If using semantic-react/radium you can apply array of styles too
     */
    style?: React.CSSProperties | React.CSSProperties[];
    /**
     * Allows to pass default html attributes.
     * Not inheriting from React.DOMAttributes to prevent annoying onAnything handlers in completion popup
     */
    [key: string]: any;
}

/**
 * Base animation properties
 */
export interface AnimationProps {
    /**
     * Enter/Appear animation name
     */
    enter?: string;
    /**
     * Leave animation name
     */
    leave?: string;
    /**
     * Enter/Appear animation duration in ms
     */
    enterDuration?: number;
    /**
     * Leave/Appear animation duration in ms
     */
    leaveDuration?: number;
}

export type SizeType = "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge" | "massive";
export type PositionType = "top" | "bottom" | "top right" | "top left" | "bottom left" | "bottom right";
export type ColorType = "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink"
    | "brown" | "grey" | "black";

// <Label />
export interface LabelProps extends BaseProps {
    /**
     * A label can attach to a content segment
     */
    attached?: PositionType;
    /**
     * A label can reduce its complexity
     */
    basic?: boolean;
    /**
     * A label can be circular
     */
    circular?: boolean;
    /**
     * A label can have different colors
     */
    color?: ColorType;
    /**
     * A label can position itself in the corner of an element
     * @default false
     */
    corner?: "left" | "right" | boolean;
    /**
     * Empty label
     */
    empty?: boolean;
    /**
     * A label can float above another element
     */
    floating?: boolean;
    /**
     * A horizontal label is formatted to label content along-side it horizontally
     */
    horizontal?: boolean;
    /**
     * Add image to the label
     */
    image?: string;
    /**
     * Format label as link (uses <a> tag)
     */
    link?: boolean;
    /**
     * A label can point to content next to it
     * @default false
     */
    pointing?: "top" | "bottom" | "left" | "right" | boolean;
    /**
     * A label can appear as a ribbon attaching itself to an element.
     * @default false
     */
    ribbon?: "right" | boolean;
    /**
     * A label can be small or large
     */
    size?: SizeType;
    /**
     * A label can appear as a tag
     */
    tag?: boolean;
}
export class Label extends React.Component<LabelProps, any> {
}

// <Detail />
export interface DetailProps extends BaseProps {
}
export class Detail extends React.Component<DetailProps, any> {
}

// <Labels />
export interface LabelsProps extends BaseProps {
    /**
     * Labels can share shapes
     */
    circular?: boolean;
    /**
     * Labels can share colors together
     */
    color?: ColorType;
    /**
     * Labels can share sizes together
     */
    size?: SizeType;
    /**
     * Labels can share tag formatting
     */
    tag?: boolean;
}
export class Labels extends React.Component<LabelsProps, any> {
}

export interface ButtonProps extends BaseProps {
    /**
     * Html type
     */
    type?: string;
    /**
     * Adds a fade or slide animation on hover.
     */
    animated?: "fade" | "vertical" | boolean;
    /**
     * It's attached to some other attachable component.
     */
    attached?: "left" | "right" | "bottom" | "top" | boolean;
    /**
     * Adds simple styling to the component.
     */
    basic?: boolean;
    /**
     * Gives a circular shape to the component.
     */
    circular?: boolean;
    /**
     * Adds a SemanticUI color class.
     */
    color?: ColorType;
    /**
     * Reduces the padding on the component.
     */
    compact?: boolean;
    /**
     * A button can be formatted to show different levels of emphasis
     */
    emphasis?: "primary" | "secondary" | "positive" | "negative" | string;
    /**
     * Forces to component to float left or right.
     */
    floated?: "right" | "left";
    /**
     * The component fills the parent components horizontal space.
     */
    fluid?: boolean;
    /**
     * Styles the component for a dark background.
     */
    inverted?: boolean;
    /**
     * Adds a SemanticUI size class.
     */
    size?: SizeType;
    /**
     * Indicates whether the button is currently highlighted or disabled.
     */
    state?: "active" | "disabled" | "loading" | string;
    /**
     * A button can be formatted to toggle on and off
     */
    toggle?: boolean;
}
export class Button extends React.Component<ButtonProps, any> {
}

// <Buttons />
export interface ButtonsProps extends BaseProps {
    /**
     * It's attached to some other attachable component.
     */
    attached?: "bottom" | "top";
    /**
     * Adds simple styling to the component.
     */
    basic?: boolean;
    /**
     * Adds a SemanticUI color class.
     */
    color?: ColorType;
    /**
     * Reduces the padding on the component.
     */
    compact?: boolean;
    /**
     * Forces all children to an equal width.
     */
    equal?: boolean;
    /**
     * Forces to component to float left or right.
     */
    floated?: "left" | "right" | string;
    /**
     * Styles the component for a dark background.
     */
    inverted?: boolean;
    /**
     * Adds a SemanticUI size class.
     */
    size?: SizeType;
    /**
     * Forces child components to render vertically.
     */
    vertical?: boolean;
}
export class Buttons extends React.Component<ButtonsProps, any> {
}

// <IconButton />
export interface IconButtonProps extends ButtonProps {
    /**
     * Adds a SemanticUI color class to the icon.
     */
    iconColor?: ColorType;
    /**
     * Icon component
     */
    iconComponent?: any;
    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: string;
}
export class IconButton extends React.Component<IconButtonProps, any> {
}

// <LabeledButton />
export interface LabeledButtonProps extends ButtonProps {
    /**
     * Label position, default to right
     * @default "right"
     */
    labeled?: "left" | "right" | string;
    /**
     * Type of label, could be text label or icon
     * @default "text"
     */
    labelType?: "text" | "icon" | string;
    /**
     * Label, if given string will be used as label text or icon name (if labelType is icon).
     */
    label: string;
    /**
     * Label component. Default will be Icon for labelType icon and Label for labelType label
     */
    labelComponent?: any;
}
export class LabeledButton extends React.Component<LabeledButtonProps, any> {
}
// <SocialButton />
export interface SocialButtonProps extends ButtonProps {
    /**
     * Adds a SemanticUI name class to the icon.
     */
    name: string;
}
export class SocialButton extends React.Component<SocialButtonProps, any> {
}

// <Divider />
export interface DividerProps extends BaseProps {
    /**
     * Content segment vertically or horizontally
     */
    aligned?: "horizontal" | "vertical";
    /**
     * A divider can clear the contents above it
     */
    clearing?: boolean;
    /**
     * Formats divider as header-like (taking less space and don't capitalize content)
     */
    header?: boolean;
    /**
     * A hidden divider divides content without creating a dividing line
     */
    hidden?: boolean;
    /**
     * A divider can have its colors inverted
     */
    inverted?: boolean;
    /**
     * Divider spacing
     */
    spacing?: "fitted" | "padded";
}
export class Divider extends React.Component<DividerProps, any> {
}

// <Flag />
export interface FlagProps extends BaseProps {
    /**
     * The country code, name or alias of the flag
     */
    name: string;
}
export class Flag extends React.Component<FlagProps, any> {
}

// <Header />
export interface HeaderProps extends BaseProps {
    /**
     * A header can have its text aligned to a side
     */
    aligned?: "right" | "left" | "justified" | "center";
    /**
     * A header can be attached to other content, like a segment
     */
    attached?: "bottom" | "top" | boolean;
    /**
     * A header can be formatted with different colors
     */
    color?: ColorType;
    /**
     * A header can show that it is inactive
     */
    disabled?: boolean;
    /**
     * Header may be used as divider
     */
    divider?: boolean;
    /**
     * dividing: can be formatted to divide itself from the content below it
     * block: can be formatted to appear inside a content block
     */
    emphasis?: "dividing" | "block";
    /**
     * A header can sit to the left or right of other content
     */
    floated?: "right" | "left";
    /**
     * Icon name for header. This will turn header into icon header (ui icon header)
     */
    icon?: string;
    /**
     * Override icon component
     */
    iconComponent?: any;
    /**
     * A header can have its colors inverted for contrast
     */
    inverted?: boolean;
    /**
     * May be used as menu item
     */
    item?: boolean;
    /**
     * May have various sizes
     */
    size?: SizeType;
}
export class Header extends React.Component<HeaderProps, any> {
}
// <SubHeader />
export interface SubHeaderProps extends HeaderProps {
}
export class SubHeader extends React.Component<SubHeaderProps, any> {
}


// <Icon />
export interface IconProps extends BaseProps {
    /**
     * An icon can be formatted to appear bordered
     */
    bordered?: boolean;
    /**
     * An icon can be formatted to appear circular
     */
    circular?: boolean;
    /**
     * An icon can be formatted with different colors
     */
    color?: ColorType;
    /**
     * Render as corner icon if used in <Icons/>
     */
    corner?: boolean;
    /**
     * Icon could be disabled or used as simple loader
     */
    state?: "disabled" | "loading";
    /**
     * An icon can be fitted, without any space to the left or right of it.
     */
    fitted?: boolean;
    /**
     * An icon can be flipped
     */
    flipped?: "horizontally" | "vertically";
    /**
     * An icon can have its colors inverted for contrast
     */
    inverted?: boolean;
    /**
     * Could be formatted as link
     */
    link?: boolean;
    /**
     * Icon name
     */
    name?: string;
    /**
     * An icon can be rotated
     */
    rotated?: "clockwise" | "counterclockwise";
    /**
     * Icon size
     */
    size?: SizeType;
}
export class Icon extends React.Component<IconProps, any> {
}

export interface IconsProps extends BaseProps {
    /**
     * Size of icon group
     */
    size?: SizeType;
}
export class Icons extends React.Component<IconsProps, any> {
}

// <Image />
export interface ImageProps extends BaseProps {
    // Standard image html attributes
    /**
     * Specifies an alternate text for an image
     */
    alt?: string;
    /**
     * Specifies the height of an image
     */
    height?: number;
    /**
     * Specifies the width of an image
     */
    width?: number;
    /**
     * An image can specify its vertical alignment
     */
    aligned?: "top" | "middle" | "bottom";
    /**
     * An image may be formatted to appear inline with text as an avatar
     */
    avatar?: boolean;
    /**
     * An image may include a border to emphasize the edges of white or transparent content
     */
    bordered?: boolean;
    /**
     * An image can appear centered in a content block
     */
    centered?: boolean;
    /**
     * An image can take up the width of its container
     */
    fluid?: boolean;
    /**
     * An image can sit to the left or right of other content
     */
    floated?: "right" | "left";
    /**
     * An image may appear at different sizes
     */
    size?: SizeType;
    /**
     * An image can specify that it needs an additional spacing to separate it from nearby content
     */
    spaced?: "right" | "left" | boolean;
    /**
     * Image src
     */
    src: string;
    /**
     * Image shape
     */
    shape?: "circular" | "rounded";
    /**
     * Image state, could be disabled or hidden
     */
    state?: "disabled" | "hidden" | "visible";
    /**
     * Wrap image component under other component, for example <a/> or <div/>
     * In this case this component will receive image classes instead
     * @default false
     */
    wrapComponent?: boolean | any;
}
export class Image extends React.Component<ImageProps, any> {
}

// <Images />
export interface ImagesProps extends BaseProps {
    /**
     * Images size
     */
    size?: SizeType;
}
export class Images extends React.Component<ImagesProps, any> {
}


// <Input />
export interface InputProps extends BaseProps {
    // Standard <input> html attributes
    /**
     * Specifies whether an <input> element should have autocomplete enabled
     */
    autoComplete?: "on" | "off";
    /**
     * Specifies that an <input> element should automatically get focus when the page loads
     */
    autoFocus?: boolean;
    /**
     * Specifies the maximum value for an <input> element
     */
    max?: number | string;
    /**
     * Specifies the maximum number of characters allowed in an <input> element
     */
    maxLength?: number;
    /**
     * Specifies a minimum value for an <input> element
     */
    min?: number | string;
    /**
     * Specifies the name of an <input> element
     */
    name?: string;
    /**
     * Specifies a regular expression that an <input> element's value is checked against
     */
    pattern?: string;
    /**
     * Specifies the type <input> element to display
     */
    type?: string;

    // React-specific stuff
    /**
     * Default value
     */
    defaultValue?: any;
    /**
     * Read only
     */
    readOnly?: boolean;

    /**
     * Action component
     */
    actionComponent?: any;
    /**
     * Action position
     */
    actionPosition?: "left" | "right";
    /**
     * An input can take the size of its container
     */
    fluid?: boolean;
    /**
     * Render icon
     */
    icon?: string | boolean;
    /**
     * Icon position
     */
    iconPosition?: "left" | "right";
    /**
     * Pass custom icon component
     */
    iconComponent?: any;
    /**
     * Inverted input
     */
    inverted?: boolean;
    /**
     * Render label for input
     */
    label?: string;
    /**
     * Pass custom label component
     */
    labelComponent?: any;
    /**
     * Label position
     */
    labelPosition?: "left" | "right" | "left corner" | "right corner";
    /**
     * Input placeholder
     */
    placeholder?: string;
    /**
     * Input size
     */
    size?: SizeType;
    /**
     * Input state
     */
    state?: "focus" | "loading" | "disabled" | "error" | Array<"focus" | "loading" | "disabled" | "error">;
    /**
     * Render transparent input
     */
    transparent?: boolean;
    /**
     * Input value
     */
    value?: string;
}
export class Input extends React.Component<InputProps, any> {
}

// <List />
export interface ListProps extends BaseProps {
    /**
     * Controls content alignment for all items in list
     */
    aligned?: "top" | "middle" | "bottom";
    /**
     * A list can animate to set the current item apart from the list
     */
    animated?: boolean;
    /**
     * Cell type
     */
    celled?: "divided" | boolean;
    /**
     * Controls content floating for all items in list
     */
    floated?: "right" | "left";
    /**
     * A list can be formatted to have items appear horizontally
     */
    horizontal?: boolean;
    /**
     * A list can be inverted to appear on a dark background
     */
    inverted?: boolean;
    /**
     * A list can be specially formatted for navigation links
     */
    link?: boolean;
    /**
     * A list can relax its padding to provide more negative space
     */
    relaxed?: boolean;
    /**
     * A selection list formats list items as possible choices
     */
    selection?: boolean;
    /**
     * A list can vary in size
     */
    size?: SizeType;
    /**
     * Type of the list
     * Bulleted: mark items with a bullet
     * Ordered: mark items with a number
     */
    type?: "bulleted" | "ordered";
}
export class List extends React.Component<ListProps, any> {
}

export interface ListItemProps extends BaseProps {
    /**
     * Mark item as active. Valid only for link list
     */
    active?: boolean;
    /**
     * Content alignment
     */
    contentAligned?: "top" | "middle" | "bottom";
    /**
     * Image/Icon name
     */
    image?: string;
    /**
     * Type of image/icon
     */
    imageType?: "image" | "icon";
    /**
     * Image/Icon component. Override to tune
     */
    imageComponent?: any;
    /**
     * Right floated content component. If not provided, then right floated content will not be rendered
     */
    rightFloatedComponent?: any;
}

export class ListItem extends React.Component<ListItemProps, any> {}

// <Loader />
export interface LoaderProps extends BaseProps {
    /**
     * Loaders can appear inline centered with content
     */
    centered?: boolean;
    /**
     * Loaders can appear inline with content
     */
    inline?: boolean;
    /**
     * Loaders can have their colors inverted.
     */
    inverted?: boolean;
    /**
     * Loaders can have different sizes
     */
    size?: SizeType;
    /**
     * Loader state
     */
    state?: "active" | "indeterminate" | "disabled";
    /**
     * A loader can contain text
     */
    text?: boolean;
}
export class Loader extends React.Component<LoaderProps, any> {
}

// <Rail />
export interface RailProps extends BaseProps {
    /**
     * A rail can appear attached to the main viewport
     */
    attached?: boolean;
    /**
     * A rail can appear closer to the main viewport
     */
    close?: boolean | "very";
    /**
     * A rail can create a division between itself and a container
     */
    dividing?: boolean;
    /**
     * A rail can be presented on the left or right side of a container
     */
    floated: "right" | "left";
    /**
     * A rail can attach itself to the inside of a container
     */
    internal?: boolean;
    /**
     * A rail can have different sizes
     */
    size?: SizeType;
}
export class Rail extends React.Component<RailProps, any> {
}

// <Reveal />
export interface RevealProps extends BaseProps {
    active?: boolean;
    circular?: boolean;
    disabled?: boolean;
    fade?: boolean;
    image?: boolean;
    instant?: boolean;
    move?: "right" | "up" | "down" | boolean;
    rotate?: "left" | boolean;
    size?: SizeType;
    type?: string;
}
export class Reveal extends React.Component<RevealProps, any> {
}

// <Segment />
export interface SegmentProps extends BaseProps {
    /**
     * A segment can have its text aligned to a side
     */
    aligned?: "right" | "left" | "center";
    /**
     * A segment can be attached to other content on a page
     */
    attached?: "bottom" | "top" | boolean;
    /**
     * A basic segment has no special formatting
     */
    basic?: boolean;
    /**
     * Blurring segment when used with dimmer
     */
    blurring?: boolean;
    /**
     * A segment can clear floated content
     */
    clearing?: boolean;
    /**
     * A segment can be colored
     */
    color?: ColorType;
    /**
     * Container segment
     */
    container?: boolean;
    /**
     * A segment may show its content is disabled
     */
    disabled?: boolean;
    /**
     * A segment can be formatted to appear more or less noticeable
     */
    emphasis?: "primary" | "secondary" | "tertiary";
    /**
     * A segment can appear to the left or right of other content
     */
    floated?: "right" | "left";
    /**
     * A segment can have its colors inverted for contrast
     */
    inverted?: boolean;
    /**
     * A segment may show its content is being loaded
     */
    loading?: boolean;
    /**
     * Segment spacing
     */
    spacing?: "fitted" | "padded";
    /**
     * Segment type
     */
    type?: "raised" | "stacked" | "piled";
    /**
     * A vertical segment formats content to be aligned as part of a vertical group
     */
    vertical?: boolean;
    /**
     * Segment zIndex
     */
    zIndex?: number;
}
export class Segment extends React.Component<SegmentProps, any> {
}

// <Segments />
interface SegmentsProps extends BaseProps {
    /**
     * Compact segments
     */
    compact?: boolean;
    /**
     * Horizontal segments
     */
    horizontal?: boolean;
    /**
     * Inverted segments
     */
    inverted?: boolean;
    /**
     * Type of segments
     */
    type?: "raised" | "piled" | "stacked";
}
export class Segments extends React.Component<SegmentsProps, any> {
}

// <Actions />
export interface ActionsProps extends BaseProps {
}
export class Actions extends React.Component<ActionsProps, any> {
}
// <Author />
export interface AuthorProps extends BaseProps {
}
export class Author extends React.Component<AuthorProps, any> {
}
// <Container />
export interface ContainerProps extends BaseProps {
    fluid?: boolean;
    aligned?: "right" | "left" | "justified" | "center";
}
export class Container extends React.Component<ContainerProps, any> {
}
// <Content />
export interface ContentProps extends BaseProps {
    active?: boolean;
    aligned?: string;
    extra?: boolean;
    floated?: string | boolean;
    hidden?: boolean;
    meta?: boolean;
    visible?: boolean;
    image?: boolean;
}
export class Content extends React.Component<ContentProps, any> {
}
// <Date />
export interface DateProps extends BaseProps {
}
export class Date extends React.Component<DateProps, any> {
}
// <Description />
export interface DescriptionProps extends BaseProps {
    hidden?: boolean;
    visible?: boolean;
}
export class Description extends React.Component<DescriptionProps, any> {
}
// <Meta />
export interface MetaProps extends BaseProps {
}
export class Meta extends React.Component<MetaProps, any> {
}
// <Summary />
export interface SummaryProps extends BaseProps {
}
export class Summary extends React.Component<SummaryProps, any> {
}
// <Text />
export interface TextProps extends BaseProps {
    extra?: boolean;
}
export class Text extends React.Component<TextProps, any> {
}

// <Field />
export interface FieldProps extends BaseProps {
    /**
     * Grouped field
     */
    grouped?: boolean;
    /**
     * A field can have its label next to instead of above it.
     */
    inline?: boolean;
    /**
     * Field label
     */
    label?: string;
    /**
     * A field can show that input is mandatory
     */
    required?: boolean;
    /**
     * Field state
     */
    state?: "disabled" | "error";
    /**
     * Field width in columns
     */
    width?: number;
}
export class Field extends React.Component<FieldProps, any> {
}
// <Fields />
export interface FieldsProps extends BaseProps {
    /**
     * Fields can have their widths divided evenly
     */
    fluid?: boolean;
    /**
     * Multiple fields may be inline in a row
     */
    inline?: boolean;
    /**
     * Fields can show related choices
     */
    grouped?: boolean;
    /**
     * Fields can automatically divide fields to be equal width
     */
    equalWidth?: boolean;
}
export class Fields extends React.Component<FieldsProps, any> {
}
// <Form />
export interface FormProps extends BaseProps {
    /**
     * A form on a dark background may have to invert its color scheme
     */
    inverted?: boolean;
    /**
     * If a form is in loading state, it will automatically show a loading indicator.
     */
    loading?: boolean;
    /**
     * A form can vary in size
     */
    size?: SizeType | any;
    /**
     * Form state
     */
    state?: "success" | "error" | "warning";
    /**
     * Forms can automatically divide fields to be equal width
     */
    equalWidth?: boolean;
}
export class Form extends React.Component<FormProps, any> {
}

// <Grid />
export interface GridProps extends BaseProps {
    /**
     * Horizontal content alignment
     */
    aligned?: "right" | "left" | "center";
    /**
     * Center columns
     */
    centered?: boolean;
    /**
     * Divide rows into cells
     */
    celled?: "internally" | boolean;
    /**
     * Grid column count
     */
    columns?: number;
    /**
     * Add container class, i.e. ui grid container
     */
    container?: boolean;
    /**
     * Add dividers between ros
     */
    divided?: "vertically" | "internally" | boolean;
    /**
     * Double column width on tablet and mobile sizes
     */
    doubling?: boolean;
    /**
     * Automatically resize elements to split the available width evently
     */
    equal?: boolean;
    /**
     * Preserve gutters on first and las columns
     */
    padded?: "horizontally" | "vertically" | boolean;
    /**
     * Increase size of gutters
     */
    relaxed?: "very" | boolean;
    /**
     * Reverse the order of columns or rows by device
     */
    reversed?: "mobile" | "mobile vertically" | "tablet" | "tablet vertically" | "computer" | "computer vertically";
    /**
     * Automatically stack rows into single columns on mobile devices
     */
    stackable?: boolean;
    /**
     * Vertical content alignment
     */
    valigned?: "top" | "middle" | "bottom";
}
export class Grid extends React.Component<GridProps, any> {
}
type DeviceVisibility = "mobile" | "tablet" | "computer" | "large screen" | "widescreen";
// <Column />
export interface ColumnProps extends BaseProps {
    /**
     * Horizontal content alignment
     */
    aligned?: "right" | "left" | "center";
    /**
     * Float to the right or left edge of the row
     */
    floated?: "right" | "left";
    /**
     * Only visible for types. Could be single type string or array, i.e. only={["mobile","tablet"]}
     */
    only?: DeviceVisibility | DeviceVisibility[];
    /**
     * Column color
     */
    color?: ColorType;
    /**
     * Column width for all device types
     */
    width?: number;
    /**
     * Column width for mobile
     */
    mobileWidth?: number;
    /**
     * Column width for tablet
     */
    tabletWidth?: number;
    /**
     * Column width for computer
     */
    computerWidth?: number;
    /**
     * Column width for large screens
     */
    largeScreenWidth?: number;
    /**
     * Column width for wide screens
     */
    wideScreenWidth?: number;
    /**
     * Vertical content alignment
     */
    valigned?: "top" | "middle" | "bottom";
}
export class Column extends React.Component<ColumnProps, any> {
}
// <Row />
export interface RowProps extends BaseProps {
    /**
     * Horizontal content alignment
     */
    aligned?: "right" | "left" | "justified" | "center";
    /**
     * Center columns in row
     */
    centered?: boolean;
    /**
     * Double column width on tablet and mobile sizes
     */
    doubling?: boolean;
    /**
     * Automatically resize elements to split the available width evently
     */
    equal?: boolean;
    /**
     * Only visible for types. Could be single type string or array, i.e. only={["mobile","tablet"]}
     */
    only?: DeviceVisibility | DeviceVisibility[];
    /**
     * Specify row columns count
     */
    columns?: number;
    /**
     * Stretch content to take up the entire column height
     */
    stretched?: boolean;
    /**
     * Row color
     */
    color?: ColorType;
    /**
     * Justified content fits exactly inside the grid column, taking up the entire width from one side to the other
     */
    justified?: boolean;
    /**
     * Vertical content alignment
     */
    valigned?: "top" | "middle" | "bottom";
}
export class Row extends React.Component<RowProps, any> {
}

// <Message />
export interface MessageProps extends BaseProps {
    /**
     * A message can be formatted to attach itself to other content
     */
    attached?: "bottom" | "top" | boolean;
    /**
     * A message can be formatted to be different colors
     */
    color?: ColorType;
    /**
     * A message can only take up the width of its content.
     */
    compact?: boolean;
    /**
     * A message can float above content that it is related to
     */
    floating?: boolean;
    /**
     * A message can be hidden
     */
    hidden?: boolean;
    /**
     * A message can contain an icon. If message contain icon as first child then it will be set automatically,
     * unless you provide it explicitly
     */
    icon?: boolean;
    /**
     * A message can have different sizes
     */
    size?: SizeType;
    /**
     * Emphasis
     */
    emphasis?: "success" | "error" | "info" | "warning" | "positive" | "negative";
    /**
     * Message is visible
     */
    visible?: boolean;
}
export class Message extends React.Component<MessageProps, any> {
}

// <Table />
export interface TableProps extends BaseProps {
    /**
     * A table header, row, or cell can adjust its text alignment
     */
    aligned?: "top" | "bottom";
    /**
     * A table can reduce its complexity to increase readability.
     */
    basic?: "very" | boolean;
    /**
     * A table may be divided each row into separate cells
     */
    celled?: boolean;
    /**
     * A cell can be collapsing so that it only uses as much space as required
     */
    collapsing?: boolean;
    /**
     * A table can be given a color to distinguish it from other tables.
     */
    color?: ColorType;
    /**
     * A table can specify its column count to divide its content evenly
     */
    columns?: number;
    /**
     * A table may sometimes need to be more compact to make more rows visible at a time
     */
    compact?: boolean | "very";
    definition?: boolean;
    /**
     * A table can use table-layout: fixed a special faster form of table rendering that does not resize table cells based on content.
     */
    fixed?: boolean;
    /**
     * A table's colors can be inverted
     */
    inverted?: boolean;
    /**
     * A table may sometimes need to be more padded for legibility
     */
    padded?: "very" | boolean;
    /**
     * A table can have its rows appear selectable
     */
    selectable?: boolean;
    /**
     * A table can specify that its cell contents should remain on a single line, and not wrap.
     */
    singleLine?: boolean;
    /**
     * A table can also be small or large
     */
    size?: SizeType;
    /**
     * A table may allow a user to sort contents by clicking on a table header.
     * NOTE: You need to set "sorted descending"/"sorted ascending" class names for corresponding <th> element
     */
    sortable?: boolean;
    /**
     * A table can specify how it stacks table content responsively
     */
    stackable?: {
        computer?: boolean;
        mobile?: boolean;
        tablet?: boolean;
    };
    /**
     * A table can stripe alternate rows of content with a darker color to increase contrast
     */
    striped?: boolean;
    /**
     * A table can be formatted to display complex structured data
     */
    structured?: boolean;
    /**
     * Reverse of stackable
     */
    unstackable?: {
        computer?: boolean;
        mobile?: boolean;
        tablet?: boolean;
    };
    /**
     * A table header, row, or cell can adjust its vertical alignment
     */
    valigned?: "center" | "right";
    /**
     * Table width in grid columns
     */
    width?: number;
}
export class Table extends React.Component<TableProps, any> {
}
// <Td />
export interface TdProps extends BaseProps {
    // Default HTML5 attributes
    /**
     * Specifies the number of columns a cell should span
     */
    colSpan?: number;
    /**
     * Sets the number of rows a cell should span
     */
    rowSpan?: number;
    /**
     * Cell text alignment
     */
    aligned?: "right" | "left" | "center";
    /**
     * A cell can be collapsing so that it only uses as much space as required
     */
    collapsing?: boolean;
    /**
     * A table cell can be selectable
     */
    selectable?: boolean;
    /**
     * Content should remain on a single line, and not wrap.
     */
    singleLine?: boolean;
    /**
     * Cell emphasis
     */
    emphasis?: "negative" | "positive" | "error" | "warning";
    /**
     * Vertical cell alignment
     */
    valigned?: "top" | "bottom" | "middle";
}
export class Td extends React.Component<TdProps, any> {
}
// <Tr />
export interface TrProps extends TdProps {
}
export class Tr extends React.Component<TrProps, any> {
}

// <BreadcrumbDivider/>
export interface BreadcrumbDividerProps extends BaseProps {
    /**
     * Icon divider
     */
    icon?: string;
}

export class BreadcrumbDivider extends React.Component<BreadcrumbDividerProps, any> {}

// <BreadcrumbSection />
export interface BreadcrumbSectionProps extends BaseProps {
    /**
     * Section may be active
     */
    active?: boolean;
}
export class BreadcrumbSection extends React.Component<BreadcrumbSectionProps, any> {}

// <Breadcrumb />
export interface BreadcrumbProps extends BaseProps {
    /**
     * A breadcrumb can vary in size
     */
    size?: SizeType;
}
export class Breadcrumb extends React.Component<BreadcrumbProps, any> {}

// <Card />
export interface CardProps extends BaseProps {
    centered?: boolean;
    col?: string;
    color?: ColorType;
    doubling?: string;
    fluid?: boolean;
    link?: boolean;
}
export class Card extends React.Component<CardProps, any> {
}

// <Cards />
export interface CardsProps extends BaseProps {
    link?: boolean;
}
export class Cards extends React.Component<CardsProps, any> {
}

// <Comment />
export interface CommentProps extends BaseProps {
}
export class Comment extends React.Component<CommentProps, any> {
}

// <Comments />
export interface CommentsProps extends BaseProps {
    collapsed?: boolean;
    minimal?: boolean;
    threaded?: boolean;
}
export class Comments extends React.Component<CommentsProps, any> {
}

// <Feed />
export interface FeedProps extends BaseProps {
    size?: SizeType;
}
export class Feed extends React.Component<FeedProps, any> {
}
// <Event />
export interface EventProps extends BaseProps {
}
export class Event extends React.Component<EventProps, any> {
}

// <Item />
export interface ItemProps extends BaseProps {
    /**
     * Item image
     */
    image?: string;
    /**
     * Vertical alignment of content
     */
    contentAligned?: "top" | "middle" | "bottom";
}
export class Item extends React.Component<ItemProps, any> {
}

// <Items />
export interface ItemsProps extends BaseProps {
    /**
     * Items can be divided to better distinguish between grouped content
     */
    divided?: boolean;
    /**
     * An item can be formatted so that the entire contents link to another page
     */
    link?: boolean;
    /**
     * A group of items can relax its padding to provide more negative space
     */
    relaxed?: any;
}
export class Items extends React.Component<ItemsProps, any> {
}

// <Menu />
export interface MenuProps extends BaseProps {
    /**
     * A menu may be attached to other content segments
     */
    attached?: "top" | "bottom";
    /**
     * A menu item or menu can have no borders
     */
    borderless?: boolean;
    /**
     * Use equal width for menu items
     */
    even?: boolean;
    /**
     * A menu item or menu can remove element padding, vertically or horizontally
     */
    fitted?: "horizontally" | "vertically" | boolean;
    /**
     * A menu can be fixed to a side of its context
     */
    fixed?: "top" | "bottom" | "left" | "right" | boolean;
    /**
     * A vertical menu may take the size of its container. (A horizontal menu does this by default)
     */
    fluid?: boolean;
    /**
     * Float left or right
     */
    floated?: "right" | "left";
    /**
     * A menu can have colors
     */
    color?: ColorType;
    /**
     * A menu may have its colors inverted to show greater contrast
     */
    inverted?: boolean;
    /**
     * Current menu active value.
     */
    menuValue?: number | string | Array<number | string>;
    /**
     * Callback for menu item click (regardless active or not active)
     * @param value
     * @param event
     */
    onMenuItemClick?: (value: string | number, event: React.MouseEvent<any>) => void;
    /**
     * Callback for active item change. Will not be fired if menuValue was omitted
     * Will pass new menuValue or array of new menuValue
     * If all items were unselected would pass null if menuValue is single value or empty array if menuValue is array
     * @param value
     */
    onMenuChange?: (value: string | number | Array<string | number> | null) => void;
    /**
     * A pagination menu is specially formatted to present links to pages of content
     */
    pagination?: boolean;
    /**
     * A menu can point to show its relationship to nearby content
     */
    pointing?: boolean;
    /**
     * A menu can adjust its appearance to de-emphasize its contents
     */
    secondary?: boolean;
    /**
     * A menu can be formatted to show tabs of information
     */
    tabular?: boolean;
    /**
     * A menu can be formatted for text content
     */
    text?: boolean;
    /**
     * Menu active value
     */
    vertical?: boolean;
}
export class Menu extends React.Component<MenuProps, any> {
}

// <MenuItem />
export interface MenuItemProps extends BaseProps {
    /**
     * Is item active
     */
    active?: boolean;
    /**
     * Is item disabled
     */
    disabled?: boolean;
    /**
     * Item color
     */
    color?: ColorType;
    /**
     * Item value
     */
    menuValue?: number | string;
    /**
     * Click callback
     */
    onClick?: (menuValue: number | string, event: React.MouseEvent<any>) => void;
}
export class MenuItem extends React.Component<MenuItemProps, any> {
}

// <Statistic />
export interface StatisticProps extends BaseProps {
    /**
     * A string or number that represents the value of statistic
     */
    value?: string | number;
    /**
     * A string or number that represents the label of a statistic
     */
    label?: string | number;
    /**
     * A statistic can present its measurement horizontally
     */
    horizontal?: boolean;
    /**
     * A SemanticUI color class.
     */
    color?: ColorType;
    /**
     * Styles the component for a dark background.
     */
    inverted?: boolean;
    /**
     * Forces to component to float left or right.
     */
    floated?: "right" | "left";
    /**
     * Adds a SemanticUI size class.
     */
    size?: SizeType;
}

export class Statistic extends React.Component<StatisticProps, any> {}

export interface StatisticsProps extends BaseProps {
    even?: boolean;
    color?: ColorType;
    size?: SizeType;
}

export class Statistics extends React.Component<StatisticsProps, any> {}

export interface ValueProps extends BaseProps {
    text?: boolean;
}

export class Value extends React.Component<ValueProps, any> {}

// Dropdown base interface
export interface DropdownBaseProps extends BaseProps {
    /**
     * Indicates status of dropdown. true for opened, false for closed
     */
    active?: boolean;
    /**
     * A compact dropdown has no minimum width
     */
    compact?: boolean;
    /**
     * A disabled dropdown menu or item does not allow user interaction
     */
    disabled?: boolean;
    /**
     * An errored dropdown can alert a user to a problem
     */
    error?: boolean;
    /**
     * A dropdown can take the full width of its parent
     */
    fluid?: boolean;
    /**
     * A dropdown can be formatted to appear inline in other content
     */
    inline?: boolean;
    /**
     * A dropdown menu can appear to be floating below an element.
     */
    floating?: boolean;
    /**
     * A dropdown can show that it is currently loading data
     */
    loading?: boolean;
    /**
     * A dropdown can be formatted so that its menu is pointing
     */
    pointing?: "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right" | boolean;
    /**
     * A dropdown can have its menu scroll
     */
    scrolling?: boolean;
}
// <Dropdown />
export interface DropdownProps extends DropdownBaseProps {
}
export class Dropdown extends React.Component<DropdownProps, any> {
}
// <DropdownMenu />
export interface DropdownMenuProps extends DropdownBaseProps, AnimationProps {
    /**
     * Active/Close menu
     */
    active?: boolean;
    /**
     * Menu icon
     */
    icon?: string;
    /**
     * Menu label
     */
    label?: string;
    /**
     * Specify component to be used as Menu.
     * Usually is should be menu but with custom options applied (for example inverted).
     * DropdownMenu will pass some props to your Menu component, so you're responsive for passing it down to the level
     */
    menuComponent?: any;
    /**
     * Menu active value
     */
    menuValue?: number | string | Array<number | string>;
    /**
     * Callback for active item change. Will not be fired if menuValue was omitted
     * Will pass new menuValue or array of new menuValue
     * If all items were unselected would pass null if menuValue is single value or empty array if menuValue is array
     */
    onMenuChange?: (value?: number | string | Array<number | string> | null) => void;
    /**
     * Callback for menu item click
     */
    onMenuItemClick?: (value?: number | string) => void;
    /**
     * Callback will be called when menu wants to be closed (for ex. from outside click)
     */
    onRequestClose?: () => void;
}
export class DropdownMenu extends React.Component<DropdownMenuProps, any> {
}

// <Option />
export interface OptionProps extends ItemProps {
    value: string|number;
    selected?: boolean;
}
export class Option extends React.Component<OptionProps, any> {
}
// <Select />
export interface SelectProps extends DropdownBaseProps, AnimationProps {
    /**
     * Should be dropdown opened
     */
    active?: boolean;
    /**
     * Name for dropdown input
     */
    name?: string;
    /**
     * Icon name for dropdown
     */
    icon?: string;
    /**
     * String used as placeholder if dropdown has no selected value
     * Will be grayed (<div class="default text">) if dropdown is selection
     * or normally displayed (<div class="text">) otherwise
     */
    placeholder?: string;
    /**
     * Searchable dropdown
     */
    search?: boolean;
    /**
     * Search glyph width
     */
    searchGlyphWidth?: number;
    /**
     * Ignore case when performing search
     */
    searchIgnoreCase?: boolean;
    /**
     * Search box position
     */
    searchPosition?: "dropdown" | "menu";
    /**
     * Search header, valid only for searchPosition="menu"
     */
    searchHeader?: string;
    /**
     * Specify message which will be displayed when search has no results
     */
    searchNoResultsMessage?: string;
    /**
     * Specify message which will be displayed when search has no results and allowAdditions enabled
     */
    allowAdditionsMessage?: string;
    /**
     * Search string
     */
    searchString?: string;
    /**
     * Selected value
     */
    selected?: Array<string | number>;
    /**
     * Behave dropdown as HTML select
     * @default true
     */
    selection?: boolean;
    /**
     * Allow multiple selection
     */
    multiple?: boolean;
    /**
     * Allow to add custom options
     */
    allowAdditions?: boolean,
    /**
     * Callback will be called when current selected value was changed.
     * Will pass array of new selected values as first param and total options count as second
     */
    onSelectChange?: (newValue: Array<string | number>, totalOptionsCount: number) => void;
    /**
     * Callback will be called when selection dropdown wants to be closed. For now only for outside of dropdown clicks
     */
    onRequestClose?: () => void;
    /**
     * Callback will be called when search string is being changed. You probably just need to pass it back to component
     */
    onSearchStringChange?: (newSearch: string) => void;
}
export class Select extends React.Component<SelectProps, any> {
}

// <Checkbox />
export interface CheckboxProps extends BaseProps {
    /**
     * Apply additional class name to to the label
     */
    labelClassName?: string;
    /**
     * State checked
     */
    checked?: boolean;
    /**
     * A fitted checkbox does not leave padding for a label
     */
    fitted?: boolean;
    /**
     * Does not allow user interaction
     */
    disabled?: boolean;
    /**
     * Attr name
     */
    name?: string;
    /**
     * Callback handler to click checkbox
     */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**
     * It does disabled, but does not allow user interaction
     */
    readOnly?: boolean;
    /**
     * Checkbox - appearance
     */
    type?: "default" | "radio" | "toggle" | "slider";
}
export class Checkbox extends React.Component<CheckboxProps, any> {
}
// <CheckboxFields />
export interface CheckboxFieldsProps extends BaseProps {
    disabled?: boolean;
    name: string;
    radio?: boolean;
    readOnly?: boolean;
    type: "grouped" | "inline"
}
export class CheckboxFields extends React.Component<CheckboxFieldsProps, any> {
}

// <Dimmer />
export interface DimmerProps extends BaseProps, AnimationProps {
    /**
     * Hide/Display dimmer
     */
    active?: boolean;
    /**
     * Inverted dimmer
     */
    inverted?: boolean;
    /**
     * Page dimmer. Doesn't require dimmable section
     */
    page?: boolean;
    /**
     * Disables auto-wrapping child contents into <Content>
     */
    noWrapChildren?: boolean;
}
export class Dimmer extends React.Component<DimmerProps, any> {
}
// <Dimmable />
export interface DimmableProps extends BaseProps {
    blurring?: boolean;
    dimmed?: boolean;
}
export class Dimmable extends React.Component<DimmableProps, any> {
}

// <Popup />
export interface PopupProps extends BaseProps, AnimationProps {
    /**
     * Basic popup variation
     */
    basic?: boolean;
    /**
     * True to display the popup. If false will be hidden
     */
    active?: boolean;
    /**
     * Auto position popup when needed
     */
    autoPosition?: boolean;
    /**
     * Fluid popup
     */
    fluid?: boolean;
    /**
     * No maximum width and continue to flow to fit its content
     */
    flowing?: boolean;
    /**
     * Offset for distance of popup from element
     */
    distanceAway?: number;
    /**
     * Use this position when element fails to fit on screen in all tried positions
     * If omitted, the last tried position will be used instead
     */
    lastResortPosition?: string;
    /**
     * Inverted popup
     */
    inverted?: boolean;
    /**
     * Offset in pixels from calculated position
     */
    offset?: number;
    /**
     * Callback when popup wants to be closed (i.e. when offscreen or clicked outside)
     */
    onRequestClose?: () => void;
    /**
     * When auto-positioning popup use opposite direction or adjacent as next position
     */
    prefer?: "adjacent|opposite";
    /**
     * If true will prevent clicking on the other elements
     */
    preventElementClicks?: boolean;
    /**
     * Hide popup when target element scrolls off the screen
     */
    requestCloseWhenOffScreen?: boolean;
    /**
     * Target element to apply popup
     */
    target: any;
    /**
     * Popup position
     */
    position?: "top left" | "top center" | "top right" | "right center" | "bottom right" | "bottom center" | "bottom left" | "left center";
    /**
     * Popup size
     */
    size?: "mini" | "tiny" | "small" | "large" | "huge";
    /**
     * Make content of popup wide
     */
    wide?: boolean | string;
    /**
     * Overlay zIndex
     * @default 1000
     */
    zIndex?: number;
}
export class Popup extends React.Component<PopupProps, any> {
}

// <AccordionTitle />
export interface AccordionTitleProps extends BaseProps {
    /**
     * True for active (visible) accordion section. This is being set by Accordion itself
     */
    active?: boolean;
    /**
     * Icon name
     */
    icon?: string;
    /**
     * Allows to override icon component
     */
    iconComponent?: any;
    /**
     * Accordion index. Used by Accordion component to control which content should be hidden/displayed
     */
    index: number | string;
}
export class AccordionTitle extends React.Component<AccordionTitleProps, any> { }

// <AccordionBody />
export interface AccordionBodyProps extends BaseProps {
    /**
     * True for active (visible) accordion section. This is being set by Accordion itself
     */
    active?: boolean;
}
export class AccordionBody extends React.Component<AccordionBodyProps, any> { }

// <Accordion />
export interface AccordionProps extends BaseProps {
    /**
     * Current visible content. Strings and numbers are accepted
     */
    activeIndexes?: number[] | string[];
    /**
     * Fluid accordion
     */
    fluid?: boolean;
    /**
     * An accordion can be formatted to appear on dark backgrounds
     */
    inverted?: boolean;
    /**
     * A styled accordion adds basic formatting
     */
    styled?: boolean;
    /**
     * Callback when accordion wants to be changed
     */
    onAccordionChange: (index: number | string) => void;
}
export class Accordion extends React.Component<AccordionProps, any> { }

export interface ModalProps extends BaseProps, AnimationProps {
    /**
     * Should be modal visible
     */
    active?: boolean;
    /**
     * A modal can reduce its complexity
     */
    basic?: boolean;
    /**
     * A modal can use the entire size of the screen (width)
     */
    fullscreen?: boolean;
    /**
     * Scrolling content. This flag will be set automatically if modal's content is too big
     */
    scrolling?: boolean;
    /**
     * A modal can vary in size
     */
    size?: string;
    /**
     * Dimmer variations
     */
    dimmed?: "blurring" | "inverted" | "blurring inverted";
    /**
     * Callback from outside modal click
     */
    onRequestClose?: () => void;
    /**
     * Callback for modal opening
     */
    onModalOpened?: () => void;
    /**
     * Callback for modal closing
     */
    onModalClosed?: () => void;
    /**
     * Overlay zIndex
     * @default 1000
     */
    zIndex?: number;
}
export class Modal extends React.Component<ModalProps, any> { }

// <TabMenu/>
export interface TabMenuProps extends MenuProps {}
export class TabMenu extends React.Component<TabMenuProps, any> {}

// <Tab>
export interface TabProps extends SegmentProps {
    /**
     * True if tab is active. Being set automatically
     */
    active?: boolean;
    /**
     * True if display loading spinner
     */
    loading?: boolean;
    /**
     * Tab index value. Should be equal to one of MenuItem value
     */
    value: string | number;
}
export class Tab extends React.Component<TabProps, any> {}

// <Tabs/>
export interface TabsProps extends BaseProps {
    /**
     * Active tab value
     */
    activeTab: string | number;
    /**
     * Current tab want's to be changed
     * @param tabValue
     */
    onTabChange?: (tabValue: string | number) => void;
}
export class Tabs extends React.Component<TabsProps, any> {}

// <Rating />
export interface RatingProps extends BaseProps {
    /**
     * Rating type
     */
    type?: "default" | "star" | "heart";
    /**
     * Rating size
     */
    size?: SizeType;
    /**
     * Rating max value
     */
    max?: number;
    /**
     * Rating value
     */
    value?: number;
    /*
     * Rating change value callback
     */
    onChange: (val: number) => void;
}
export class Rating extends React.Component<RatingProps, any> {}
