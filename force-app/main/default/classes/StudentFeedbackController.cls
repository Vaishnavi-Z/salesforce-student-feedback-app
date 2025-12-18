public with sharing class StudentFeedbackController {
    @AuraEnabled
    public static void saveFeedback(String studentName, String course, Integer rating, String comments) {
        Student_Feedback__c feedback = new Student_Feedback__c(
            Student_Name__c = studentName,
            Course__c = course,
            Rating__c = rating,
            Comments__c = comments
        );
        insert feedback;
    }

    @AuraEnabled(cacheable=true)
    public static List<Student_Feedback__c> getFeedbacks() {
        return [SELECT Student_Name__c, Course__c, Rating__c, Comments__c FROM Student_Feedback__c];
    }
}
