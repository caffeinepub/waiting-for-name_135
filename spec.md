# OATH - Own Your Time

## Current State

The landing page has a functional feedback form in the "Review Form Section" with the following fields:
- Name (text input)
- Exam Target (radio buttons: JEE/NEET)
- Biggest Distraction (textarea)
- Average Study Hours (input)
- What Feature You Need Most (textarea)
- Submit button

Currently, the form exists as static UI with no backend integration or submission functionality.

## Requested Changes (Diff)

### Add
- SheetDB API integration for feedback form submission
- React state management for form fields and submission status
- Loading state during submission (button text: "Submitting...")
- Success message display: "Submitted Successfully!"
- Error handling with alert message
- Form validation (all fields required)
- Form reset after successful submission

### Modify
- Convert form to controlled React components with TypeScript types
- Add proper event handlers for form submission
- Update submit button to show loading state

### Remove
- N/A

## Implementation Plan

**Frontend Only**:
1. Identify the feedback form component in the codebase
2. Add React state hooks for form fields (name, examTarget, distraction, studyHours, feature)
3. Add state for loading and submission status
4. Create form submission handler that:
   - Prevents default form behavior
   - Validates all fields are filled
   - Sets loading state
   - Sends POST request to `https://sheetdb.io/api/v1/14b5l1qkxwohr`
   - Sends data in exact format with headers: "Name", "Exam Target", "Biggest Distraction", "Average Study Hours (per day)", "What Feature You Need Most"
   - Handles success (show alert, reset form, clear loading)
   - Handles errors (show alert, clear loading)
5. Connect form inputs to controlled state values
6. Connect submit button to loading state
7. Validate with TypeScript typecheck, lint, and build

## UX Notes

- Submit button should be disabled and show "Submitting..." during API call
- Success alert: "Submitted Successfully!"
- Error alert: "Something went wrong!"
- Form should clear all fields after successful submission
- All fields are required for submission
- Maintain existing dark theme styling and layout
