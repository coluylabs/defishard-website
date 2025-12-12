# DefiShard Mobile Design System

**Target Platform:** React Native / iOS & Android
**Philosophy:** Secure, tactile, high-contrast. On mobile, "Institutional Precision" means clear data readability and confident touch interactions.

---

## 1. Core Adaptation

### Safe Areas & Layout
- **Background**: `#0F1115` (Fill the entire safe area)
- **Status Bar**: Light Content (White text on dark background)
- **Safe Area Insets**: Keep core content within safe areas, but allow background colors to bleed to edges.

### Navigation
- **Header**:
  - Background: `#0F1115` (Matte, no blur)
  - Border: 1px bottom border `#2D3340`
  - Title: `Inter-Bold`, 17px, White
  - Back Button: `brand-lime` chevron or arrow
- **Tab Bar (Bottom)**:
  - Background: `#161920`
  - Border: 1px top border `#2D3340`
  - Active Icon: `#CCFF00` (Lime)
  - Inactive Icon: `#94A3B8` (Slate)
  - Active Label: `JetBrains Mono`, 10px, Lime

---

## 2. Typography Mapping

| Web Token | Mobile Equivalent (React Native) |
| :--- | :--- |
| `Inter` | `Inter-Regular`, `Inter-Bold` |
| `JetBrains Mono` | `JetBrainsMono-Regular`, `JetBrainsMono-Medium` |
| `heading-xl` | 32px / 40px (Hero) |
| `heading-lg` | 24px / 32px (Section) |
| `text-base` | 16px / 24px (Body) |
| `label` | 12px / 16px (Caps, Spaced) |

---

## 3. Mobile Components

### 3.1 Buttons (Touch Targets)
*Minimum height: 48px*

**Primary Button**
- Width: 100% (or fixed bottom bar)
- Height: 52px
- Background: `#CCFF00`
- Text: Black, `JetBrains Mono`, Bold, Uppercase
- Radius: 8px
- **Active State**: Opacity 0.8 or scale 0.98

**Secondary Button**
- Border: 1px solid `#2D3340`
- Text: White
- Radius: 8px

### 3.2 List Items ("Grid" feel)
Instead of a grid, use stacked list items with separators to mimic the technical look.

```tsx
// Example Row Style
<View style={{ 
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  padding: 16, 
  backgroundColor: '#161920',
  borderBottomWidth: 1,
  borderColor: '#2D3340' 
}}>
  <Text style={styles.label}>TRANSACTION_ID</Text>
  <Text style={styles.value}>0x7f...3a2</Text>
</View>
```

### 3.3 Status Cards
Used for wallet connection status or security checks.
- Background: `#1D2129`
- Border: 1px solid `#2D3340`
- Radius: 12px
- Padding: 16px

### 3.4 Inputs
- Height: 52px
- Background: `#0F1115`
- Border: 1px solid `#2D3340`
- Text: White, `JetBrains Mono`
- **Focus**: Border `#CCFF00`

---

## 4. Interaction Patterns

### Haptic Feedback
Since we can't use hover states, use Haptics for "Technical" feel.
- **Success**: `Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)`
- **Error**: `Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)`
- **Tap**: `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)` (on key presses)

### Transitions
- **Slide**: Standard iOS push/pop.
- **Modal**: Bottom sheet slide-up for "Transaction Review" screens.
- **Loading**: Use a mono-style loader (e.g., a blinking cursor `_` or a simple spinner).

---

## 5. Assets

### Icons
Use **SVG** versions of Lucide icons.
- Stroke width: 2px
- Size: 24px standard

### Illustrations
Use the same CSS-based "schematic" diagrams but rendered as SVGs or native views (using Flexbox layouts with borders). Avoid raster images for diagrams to keep them sharp on high-DPI screens.
