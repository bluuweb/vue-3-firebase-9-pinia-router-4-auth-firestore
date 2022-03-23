rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /urls/{id} {
      allow read, update, delete: if request.auth != null && request.auth.uid == resource.data.user;
      allow create: if request.auth != null;
    }
  }
}