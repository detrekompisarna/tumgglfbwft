import styled, { css } from 'styled-components/native'

export const ItemWrapper = styled.View`
    display: flex;
    flex-direction: column;

    margin: 0 8px 8px 8px;
`

export const Item = styled.View`
    padding: 16px;
    border-radius: 16px;

    background: #fff;
`

export const ItemTop = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ItemBottom = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
`

export const UserWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserName = styled.Text`
    margin-left: 16px;

    font-family: 'work-sans-bold';
    font-size: 18px;
`

export const ScoreWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Score = styled.Text`
    font-family: 'work-sans-bold';
    font-size: 18px;
`

export const Placement = styled.Text`
    margin-left: 8px;

    font-family: 'work-sans-regular';
    font-size: 16px;
`

export const Joined = styled.Text`
    font-family: 'work-sans-regular';
    font-size: 14px;
    color: #8f8f8f;
`

export const ButtonsWrapper = styled.View`
    display: flex;
    flex-direction: row;
`

const buttonCss = css`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 16px;
    border-radius: 8px;
    width: 40px;
    height: 40px;
`

export const StatsButton = styled.TouchableOpacity`
    ${buttonCss}

    background-color: #ebf2ff;
`

export const PlusButton = styled.TouchableOpacity`
    ${buttonCss}

    background-color: #feede8;
`

export const MinusButton = styled.TouchableOpacity`
    ${buttonCss}

    background-color: #feede8;
`

export const ButtonText = styled.Text`
    font-family: 'work-sans-bold';
    font-size: 30px;
    line-height: 40px;
    /* color: #ee6464; */
`

export const LastWrapper = styled.View`
    position: relative;
    z-index: -1;

    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: -16px;
    padding: 16px;
    padding-top: 24px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;

    background: #ffd353;
`
export const LastText = styled.Text`
    margin-left: 16px;

    font-family: 'work-sans-bold';
    font-size: 15px;
`