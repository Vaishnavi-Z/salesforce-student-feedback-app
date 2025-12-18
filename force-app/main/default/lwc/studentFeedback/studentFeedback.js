import { LightningElement, track } from 'lwc';
import saveFeedback from '@salesforce/apex/StudentFeedbackController.saveFeedback';

export default class StudentFeedback extends LightningElement {
    @track studentName = '';
    @track course = '';
    @track rating;
    @track comments = '';

    handleInput(event) {
           const field = event.target.dataset.field;
    this[field] = event.target.value;

    }

    submitFeedback() {
        saveFeedback({ 
            studentName: this.studentName, 
            course: this.course, 
            rating: parseInt(this.rating), 
            comments: this.comments 
        })
        .then(() => {
            alert('Feedback submitted successfully!');
            this.studentName = '';
            this.course = '';
            this.rating = '';
            this.comments = '';
        })
        .catch(error => {
            alert('Error: ' + error.body.message);
        });
    }
}
