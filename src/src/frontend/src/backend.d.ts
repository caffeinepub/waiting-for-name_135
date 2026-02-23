import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Review {
    id: bigint;
    averageStudyHours: bigint;
    biggestDistraction: string;
    name: string;
    neededFeature: string;
    timestamp: bigint;
    examTarget: ExamTarget;
}
export enum ExamTarget {
    jee = "jee",
    neet = "neet"
}
export interface backendInterface {
    getAllReviews(): Promise<Array<Review>>;
    getReviewById(id: bigint): Promise<Review>;
    submitReview(name: string, examTarget: ExamTarget, biggestDistraction: string, averageStudyHours: bigint, neededFeature: string): Promise<void>;
}
