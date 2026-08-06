# Types changelog

- Added: 2
- Removed: 0
- Changed: 0
- Unchanged: 4937

## Added
- `interface:CDOTA_Modifier_Lua#method:AddCustomTransmitterData`
- `interface:CDOTA_Modifier_Lua#method:HandleCustomTransmitterData`


## 2026-08-06 14:53:37

- Added: 0
- Removed: 0
- Changed: 1
- Unchanged: 4938

## Changed
- `interface:CDOTA_Modifier_Lua#method:GetRedirectSpell`
  - before: `GetRedirectSpell(): void`
  - after:  `GetRedirectSpell(event: ModifierAbilityEvent): 0 | 1`

## 2026-08-06 15:00:14

- Added: 0
- Removed: 0
- Changed: 1
- Unchanged: 4938

## Changed
- `interface:CDOTA_Modifier_Lua#method:GetRedirectSpell`
  - before: `GetRedirectSpell(event: ModifierAbilityEvent): 0 | 1`
  - after:  `GetRedirectSpell(event?: ModifierAbilityEvent): 0 | 1`
