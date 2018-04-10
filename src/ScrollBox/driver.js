export default class ScrollBoxDriver
{
    constructor( wrapper )
    {
        this.wrapper = wrapper;
    }

    clickScrollUp()
    {
        this.wrapper.find( '.scrollBox__icon__up' ).first()
            .simulate( 'click' );
        return this;
    }

    clickScrollRight()
    {
        this.wrapper.find( '.scrollBox__icon__right' ).first()
            .simulate( 'click' );
        return this;
    }

    clickScrollDown()
    {
        this.wrapper.find( '.scrollBox__icon__down' ).first()
            .simulate( 'click' );
        return this;
    }

    clickScrollLeft()
    {
        this.wrapper.find( '.scrollBox__icon__left' ).first()
            .simulate( 'click' );
        return this;
    }

    scrollVertical( scrollOffset )
    {
        this.wrapper.find( '.scrollBox__scrollBox' ).simulate( 'scroll', {
            target : { scrollTop: scrollOffset }
        } );
        return this;
    }

    scrollHorizontal( scrollOffset )
    {
        this.wrapper.find( '.scrollBox__scrollBox' ).simulate( 'scroll', {
            target : { scrollLeft: scrollOffset }
        } );
        return this;
    }
}
