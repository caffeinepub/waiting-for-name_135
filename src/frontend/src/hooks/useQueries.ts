import { useMutation, useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";
import { ExamTarget, type Review } from "../backend.d";

export function useSubmitReview() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (data: {
      name: string;
      examTarget: ExamTarget;
      biggestDistraction: string;
      averageStudyHours: bigint;
      neededFeature: string;
    }) => {
      if (!actor) throw new Error("Actor not initialized");
      return actor.submitReview(
        data.name,
        data.examTarget,
        data.biggestDistraction,
        data.averageStudyHours,
        data.neededFeature
      );
    },
  });
}

export function useGetAllReviews() {
  const { actor, isFetching } = useActor();

  return useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}
