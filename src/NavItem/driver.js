// eslint-disable-next-line max-len
import ClickableComponentDriver from '../Testing/CommonDrivers/clickableComponentDriver';

export default class NavItemDriver extends ClickableComponentDriver
{
    constructor( wrapper )
    {
        super( wrapper, `.${wrapper.props().cssMap.link}` );
    }

    getLabel()
    {
        return this.wrapper.find( `.${this.cssMap.link} span` )
                        .first().children();
    }
}
