import { atom } from "recoil";

export const dataQuestion = atom({
    key: "dataQuestion",
    default: null
})

export const answerData = atom({
    key: "answerData",
    default: null
})

export const modalState = atom({
    key: "modalState",
    default: {},
});
