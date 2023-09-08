# TimeFrame

## TimeFrame is a Calendar app

```mermaid
erDiagram
    User {
        string UserID PK
        string name
    }
    Calendar {
        string CalendarID PK
        string name
        string UserID FK
    }
    CalenderItem {
        string CalendarID FK
        string name
    }
    COUNTRY ||--|{ STATE : "Has"
    STATE ||--|{ CITY : "Has"
    CITY ||--o| STATE : "Is capital of"
    CITY ||--o| COUNTRY : "Is capital of"
```
