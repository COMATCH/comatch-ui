export interface Background {
    /** #FFFFFF */
    paper: string;
    /** #F5FBFC */
    default: string;
    /** #FFF0F0 */
    error: string;
    /** #F0FFF2 */
    success: string;
    /** #FFF6F0 */
    warning: string;
    /** #F0FFFF */
    info: string;
}

const background: Background = {
    paper: '#FFFFFF',
    default: '#F5FBFC',
    error: '#FFF0F0',
    success: '#F0FFF2',
    warning: '#FFF6F0',
    info: '#F0FFFF',
};

export default background;
