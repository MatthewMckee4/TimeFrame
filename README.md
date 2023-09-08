# TimeFrame

TimeFrame is a calendar app


## Entity Relationship Diagram (ERD)

The initial and most basic structure of our database is depicted below; it shows one user owning zero or more Calendar, and one calendar containg zero or more Event. This should not be a challenge for us to implement.

```mermaid
erDiagram

    User ||--o{ Calendar : owns
    User {
        string username PK
        string password
        image profile_picture
    }

    Calendar ||--o{ Event : contains
    Calendar {
        string name PK
        string owner PK, FK "references User.username"
    }

    Event {
        string calendar_id PK, FK "references compound PK of Calendar"
        string name PK
        datetime start PK
        datetime end PK
        string location
    }
```

A new ERD shows a more complex relationship between User and Calendar; one user *owns* zero or more calendars, but one or more users *access* zero or more calendars. The reason the 'accesses' relationship has one mandatory user is because an owner themself is an accessor.

```mermaid
erDiagram

    User ||--o{ Calendar : owns
    User ||--o{ Accesses : ""
    User {
        string username PK
        string password
        image profile_picture
    }

    Accesses }|--|| Calendar : ""
    Accesses {
        string username PK,FK
        string calendar_id PK, FK "references compound PK of Calendar"
    }

    Calendar ||--o{ Event : contains
    Calendar {
        string name PK
        string owner PK, FK "references User.username"
    }

    Event {
        string calendar_id PK, FK "references compound PK of Calendar"
        string name PK
        datetime start PK
        datetime end PK
        string location
    }
```