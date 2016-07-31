/**
 * Enhanced support for Radium. Re-export all modules enhanced with radium.
 * Why just don't loop over exported collections/elements/modules/etc... ? Because many elements doing some stuff on provided elements, for example
 * checking if has children of given class type, and Radium(Class) is not equal just Class.
 *
 * So we're doing here:
 * 1) Export components with radium decorator
 * 2) Set decorated components to static element properties in few components
 *
 */
import Radium from 'radium';

// collections
import Column from './collections/grid/column';
import Grid from './collections/grid/grid';
import Row from './collections/grid/row';

import Message from './collections/message/message';

import Table from './collections/table/table';
import Tr from './collections/table/tr';
import Td from './collections/table/td';

import Form from './collections/form/form';
import Fields from './collections/form/fields';
import Field from './collections/form/field';

import Breadcrumb from './collections/breadcrumb/breadcrumb';
import BreadcrumbDivider from './collections/breadcrumb/divider';
import BreadcrumbSection from './collections/breadcrumb/section';

// elements

import Button from './elements/button/button';
import Buttons from './elements/button/buttons';
import LabeledButton from './elements/button/labeledbutton';
import IconButton from './elements/button/iconbutton';
import SocialButton from './elements/button/socialbutton';

import Divider from './elements/divider/divider';

import Flag from './elements/flag/flag';

import Header from './elements/header/header';
import SubHeader from './elements/header/subheader';

import Icon from './elements/icon/icon';
import Icons from './elements/icon/icons';

import Image from './elements/image/image';
import Images from './elements/image/images';

import Input from './elements/input/input';

import Detail from './elements/label/detail';
import Label from './elements/label/label';
import Labels from './elements/label/labels';

import List from './elements/list/list';
import ListItem from './elements/list/listitem';

import Loader from './elements/loader/loader';

import Rail from './elements/rail/rail';

import Reveal  from './elements/reveal/reveal';

import Segment from './elements/segment/segment';
import Segments from './elements/segment/segments';

import Actions from './elements/simple/actions';
import Author from './elements/simple/author';
import Container from './elements/simple/container';
import Content from './elements/simple/content';
import Date from './elements/simple/date';
import Description from './elements/simple/description';
import Meta from './elements/simple/meta';
import Summary from './elements/simple/summary';
import Text from './elements/simple/text';

// modules
import Accordion from './modules/accordion/accordion';
import AccordionBody from './modules/accordion/accordionbody';
import AccordionTitle from './modules/accordion/accordiontitle';

import Checkbox from './modules/checkbox/checkbox';
import CheckboxFields from './modules/checkbox/checkboxfields';

import Dimmer from './modules/dimmer/dimmer';
import Dimmable from './modules/dimmer/dimmable';

import DropdownElement from './modules/dropdown/dropdownelement';
import Select from './modules/dropdown/select';
import Option from './modules/dropdown/option';
import DropdownMenu from './modules/dropdown/dropdownmenu';

import Modal from './modules/modal/modal';
import ModalElement from './modules/modal/modalelement';

import Popup from './modules/popup/popup';
import PopupElement from './modules/popup/popupelement';

import Bar from './modules/progress/bar';
import Progress from './modules/progress/progress';

import Rating from './modules/rating/rating';

import Results from './modules/search/results';
import Search from './modules/search/search';

import Tab from './modules/tab/tab';
import Tabs from './modules/tab/tabs';
import TabMenu from './modules/tab/tabmenu';

// Views
import Card from './views/card/card';
import Cards from './views/card/cards';

import Menu from './views/menu/menu';
import MenuItem from './views/menu/menuitem';

import Comments from './views/comment/comments';
import Comment from './views/comment/comment';

import Feed from './views/feed/feed';
import Event from './views/feed/event';

import Item from './views/item/item';
import Items from './views/item/items';

import Statistic from './views/statistic/statistic';
import Statistics from './views/statistic/statistics';
import Value from './views/statistic/value';

let RadiumColumn = Radium(Column);
let RadiumGrid = Radium(Grid);
let RadiumRow = Radium(Row);

let RadiumMessage = Radium(Message);

let RadiumTable = Radium(Table);
let RadiumTr = Radium(Tr);
let RadiumTd = Radium(Td);

let RadiumForm = Radium(Form);
let RadiumFields = Radium(Fields);
let RadiumField = Radium(Field);

let RadiumBreadcrumb = Radium(Breadcrumb);
let RadiumBreadcrumbDivider = Radium(BreadcrumbDivider);
let RadiumBreadcrumbSection = Radium(BreadcrumbSection);

// elements
let RadiumButton = Radium(Button);
let RadiumButtons = Radium(Buttons);
let RadiumLabeledButton = Radium(LabeledButton);
let RadiumIconButton = Radium(IconButton);
let RadiumSocialButton = Radium(SocialButton);

let RadiumDivider = Radium(Divider);

let RadiumFlag = Radium(Flag);

let RadiumHeader = Radium(Header);
let RadiumSubHeader = Radium(SubHeader);

let RadiumIcon = Radium(Icon);
let RadiumIcons = Radium(Icons);

let RadiumImage = Radium(Image);
let RadiumImages = Radium(Images);

let RadiumInput = Radium(Input);

let RadiumDetail = Radium(Detail);
let RadiumLabel = Radium(Label);
let RadiumLabels = Radium(Labels);

let RadiumList = Radium(List);
let RadiumListItem = Radium(ListItem);

let RadiumLoader = Radium(Loader);

let RadiumRail = Radium(Rail);

let RadiumReveal = Radium(Reveal);

let RadiumSegment = Radium(Segment);
let RadiumSegments = Radium(Segments);

let RadiumActions = Radium(Actions);
let RadiumAuthor = Radium(Author);
let RadiumContainer = Radium(Container);
let RadiumContent = Radium(Content);
let RadiumDate = Radium(Date);
let RadiumDescription = Radium(Description);
let RadiumMeta = Radium(Meta);
let RadiumSummary = Radium(Summary);
let RadiumText = Radium(Text);

// modules
let RadiumAccordion = Radium(Accordion);
let RadiumAccordionBody = Radium(AccordionBody);
let RadiumAccordionTitle = Radium(AccordionTitle);

let RadiumCheckbox = Radium(Checkbox);
let RadiumCheckboxFields = Radium(CheckboxFields);

let RadiumDimmer = Radium(Dimmer);
let RadiumDimmable = Radium(Dimmable)

let RadiumDropdownElement = Radium(DropdownElement);
let RadiumSelect = Radium(Select);
let RadiumOption = Radium(Option);
let RadiumDropdownMenu = Radium(DropdownMenu);

let RadiumModal = Radium(Modal);
let RadiumModalElement = Radium(ModalElement);

let RadiumPopup = Radium(Popup);
let RadiumPopupElement = Radium(PopupElement);

let RadiumBar = Radium(Bar);
let RadiumProgress = Radium(Progress);

let RadiumRating = Radium(Rating);

let RadiumResults = Radium(Results);
let RadiumSearch = Radium(Search);

// views
let RadiumTab = Radium(Tab);
let RadiumTabs = Radium(Tabs);
let RadiumTabMenu = Radium(TabMenu);

let RadiumCard = Radium(Card);
let RadiumCards = Radium(Cards);

let RadiumMenu = Radium(Menu);
let RadiumMenuItem = Radium(MenuItem);

let RadiumComments = Radium(Comments);
let RadiumComment = Radium(Comment);

let RadiumFeed = Radium(Feed);
let RadiumEvent = Radium(Event);

let RadiumItem = Radium(Item);
let RadiumItems = Radium(Items);

let RadiumStatistic = Radium(Statistic);
let RadiumStatistics = Radium(Statistics);
let RadiumValue = Radium(Value);


// Override some components here
RadiumField.Components.Checkbox = RadiumCheckbox;
RadiumField.Components.CheckboxFields = RadiumCheckboxFields;
RadiumFields.Components.Field = RadiumField;

RadiumTr.Components.Td = RadiumTd;

RadiumMessage.Components.Icon = RadiumIcon;

RadiumBreadcrumbDivider.Components.Icon = RadiumIcon;

RadiumIconButton.Components.Icon = RadiumIcon;
RadiumIconButton.Components.Button = RadiumButton;

RadiumLabeledButton.Components.Icon = RadiumIcon;
RadiumLabeledButton.Components.Label = RadiumLabel;
RadiumLabeledButton.Components.Button = RadiumButton;

RadiumSocialButton.Components.IconButton = RadiumIconButton;
RadiumSocialButton.Components.Button = RadiumButton;
RadiumSocialButton.Components.Icon = RadiumIcon;

RadiumHeader.Components.Icon = RadiumIcon;
RadiumHeader.Components.Image = RadiumImage;
RadiumSubHeader.Components.Header = RadiumHeader;

RadiumInput.Components.Icon = RadiumIcon;
RadiumInput.Components.Label = RadiumLabel;

RadiumListItem.Components.Image = RadiumImage;
RadiumListItem.Components.Icon = RadiumIcon;
RadiumListItem.Components.Content = RadiumContent;
RadiumListItem.Components.List = RadiumList;

RadiumReveal.Components.Image = RadiumImage;

RadiumAccordionTitle.Components.Icon = RadiumIcon;

RadiumCheckboxFields.Components.Checkbox = RadiumCheckbox;

RadiumDimmer.Components.Loader = RadiumLoader;
RadiumDimmer.Components.Content = RadiumContent;

RadiumDropdownMenu.Components.Icon = RadiumIcon;
RadiumDropdownMenu.Components.Text = RadiumText;
RadiumDropdownMenu.Components.Menu = RadiumMenu;
RadiumDropdownMenu.Components.DropdownElement = RadiumDropdownElement;

RadiumOption.Components.MenuItem = RadiumMenuItem;
RadiumSelect.Components.Label = RadiumLabel;
RadiumSelect.Components.Icon = RadiumIcon;
RadiumSelect.Components.Header = RadiumHeader;
RadiumSelect.Components.Menu = RadiumMenu;
RadiumSelect.Components.DropdownElement = RadiumDropdownElement;

RadiumModal.Components.Dimmer = RadiumDimmer;
RadiumModal.Components.ModalElement = RadiumModalElement;

RadiumPopup.Components.PopupElement = RadiumPopupElement;

RadiumProgress.Components.Bar = RadiumBar;

RadiumResults.Components.Content = RadiumContent;
RadiumSearch.Components.Icon = RadiumIcon;
RadiumSearch.Components.Results = RadiumResults;

RadiumTabMenu.Components.Menu = RadiumMenu;
RadiumTab.Components.Segment = RadiumSegment;
RadiumTabs.Components.TabMenu = RadiumTabMenu;
RadiumTabs.Components.Tab = RadiumTab;

RadiumComment.Components.Image = RadiumImage;
RadiumComment.Components.Content = RadiumContent;

RadiumEvent.Components.Image = RadiumImage;
RadiumEvent.Components.Images = RadiumImages;
RadiumEvent.Components.Icon = RadiumIcon;

RadiumItem.Components.Icon = RadiumIcon;

RadiumStatistic.Components.Value = RadiumValue;
RadiumStatistic.Components.Label = RadiumLabel;
// Export
// collections
export { RadiumColumn as Column };
export { RadiumGrid as Grid };
export { RadiumRow as Row };

export { RadiumMessage as Message };

export { RadiumTable as Table };
export { RadiumTr as Tr };
export { RadiumTd as Td };

export { RadiumForm as Form };
export { RadiumFields as Fields };
export { RadiumField as Field };

export { RadiumBreadcrumb as Breadcrumb };
export { RadiumBreadcrumbDivider as BreadcrumbDivider };
export { RadiumBreadcrumbSection as BreadcrumbSection };

// elements
export { RadiumButton as Button };
export { RadiumButtons as Buttons };
export { RadiumLabeledButton as LabeledButton };
export { RadiumIconButton as IconButton };
export { RadiumSocialButton as SocialButton };

export { RadiumDivider as Divider };

export { RadiumFlag as Flag };

export { RadiumHeader as Header };
export { RadiumSubHeader as SubHeader };

export { RadiumIcon as Icon };
export { RadiumIcons as Icons };

export { RadiumImage as Image };
export { RadiumImages as Images };

export { RadiumInput as Input };

export { RadiumDetail as Detail };
export { RadiumLabel as Label };
export { RadiumLabels as Labels };

export { RadiumList as List };
export { RadiumListItem as ListItem };

export { RadiumLoader as Loader };

export { RadiumRail as Rail };

export { RadiumReveal as Reveal };

export { RadiumSegment as Segment };
export { RadiumSegments as Segments };

export { RadiumActions as Actions };
export { RadiumAuthor as Author };
export { RadiumContainer as Container };
export { RadiumContent as Content };
export { RadiumDate as Date };
export { RadiumDescription as Description };
export { RadiumMeta as Meta };
export { RadiumSummary as Summary };
export { RadiumText as Text };

// modules
export { RadiumAccordion as Accordion };
export { RadiumAccordionBody as AccordionBody };
export { RadiumAccordionTitle as AccordionTitle };

export { RadiumCheckbox as Checkbox };
export { RadiumCheckboxFields as CheckboxFields };

export { RadiumDimmer as Dimmer };
export { RadiumDimmable as Dimmable };

export { RadiumDropdownElement as DropdownElement };
export { RadiumSelect as Select };
export { RadiumOption as Option };
export { RadiumDropdownMenu as DropdownMenu };

export { RadiumModal as Modal };
export { RadiumModalElement as ModalElement };

export { RadiumPopup as Popup };
export { RadiumPopupElement as PopupElement };

export { RadiumBar as Bar };
export { RadiumProgress as Progress };

export { RadiumRating as Rating };

export { RadiumResults as Results };
export { RadiumSearch as Search };

// views
export { RadiumTab as Tab };
export { RadiumTabs as Tabs };
export { RadiumTabMenu as TabMenu };

export { RadiumCard as Card };
export { RadiumCards as Cards };

export { RadiumMenu as Menu };
export { RadiumMenuItem as MenuItem };

export { RadiumComments as Comments };
export { RadiumComment as Comment };

export { RadiumFeed as Feed };
export { RadiumEvent as Event };

export { RadiumItem as Item };
export { RadiumItems as Items };

export { RadiumStatistic as Statistic };
export { RadiumStatistics as Statistics };
export { RadiumValue as Value };
