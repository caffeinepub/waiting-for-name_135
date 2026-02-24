import Time "mo:core/Time";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type ExamTarget = {
    #jee;
    #neet;
  };

  type Review = {
    id : Nat;
    name : Text;
    examTarget : ExamTarget;
    biggestDistraction : Text;
    averageStudyHours : Nat;
    neededFeature : Text;
    timestamp : Int;
  };

  var reviewId = 0;
  let reviews = Map.empty<Nat, Review>();

  public shared ({ caller }) func submitReview(name : Text, examTarget : ExamTarget, biggestDistraction : Text, averageStudyHours : Nat, neededFeature : Text) : async () {
    let id = reviewId;
    let newReview : Review = {
      id;
      name;
      examTarget;
      biggestDistraction;
      averageStudyHours;
      neededFeature;
      timestamp = Time.now();
    };

    reviews.add(id, newReview);
    reviewId += 1;
  };

  public query ({ caller }) func getAllReviews() : async [Review] {
    reviews.values().toArray();
  };

  public query ({ caller }) func getReviewById(id : Nat) : async Review {
    switch (reviews.get(id)) {
      case (null) { Runtime.trap("Review not found") };
      case (?review) { review };
    };
  };
};
