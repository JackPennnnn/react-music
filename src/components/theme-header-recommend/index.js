import React, {memo} from "react";
import PropTypes from 'prop-types'

import {HeaderWrapper} from './style'

const ThemeHeaderRecommend = function (props) {
    const {title, keywords = []} = props
    return (
        <HeaderWrapper className='sprite_02'>
            <div className='left'>
                <h3 className='title'>{title}</h3>
                <div className='keyword'>
                    {
                        keywords.map((item, index) => {
                            return (
                                <div className='item' key={item}>
                                    <a>{item}</a>
                                    <span className='divider'>|</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a>更多</a>
                <i className="icon sprite_02"></i>
            </div>
        </HeaderWrapper>
    )
}

ThemeHeaderRecommend.propTypes = {
    title: PropTypes.string.isRequired,
    keywords: PropTypes.array
}

ThemeHeaderRecommend.defaultProps = {
    keywords: []
}
export default memo(ThemeHeaderRecommend)