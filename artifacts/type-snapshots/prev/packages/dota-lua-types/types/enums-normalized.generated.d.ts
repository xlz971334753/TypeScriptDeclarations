declare const DOTA_ITEM_INVENTORY_SIZE: 9;

declare const DOTA_ITEM_MAX: 25;

declare const DOTA_ITEM_STASH_MAX: 15;

declare const DOTA_ITEM_STASH_MIN: 9;

declare const DOTA_ITEM_STASH_SIZE: 6;

declare const DOTA_MAX_ABILITIES: 40;

declare const FIND_UNITS_EVERYWHERE: -1;

declare const SPAWN_GROUP_HANDLE_INVALID: 0;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ABILITY_TYPES = AbilityTypes;

declare const enum AbilityTypes {
    BASIC = 0,
    ULTIMATE = 1,
    ATTRIBUTES = 2,
    HIDDEN = 3,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type AbilityLearnResult_t = AbilityLearnResult;

declare const enum AbilityLearnResult {
    CAN_BE_UPGRADED = 0,
    CANNOT_BE_UPGRADED_NOT_UPGRADABLE = 1,
    CANNOT_BE_UPGRADED_AT_MAX = 2,
    CANNOT_BE_UPGRADED_REQUIRES_LEVEL = 3,
    NOT_LEARNABLE = 4,
}

declare const enum ActivateType {
    INITIAL_CREATION = 0,
    DATAUPDATE_CREATION = 1,
    ONRESTORE = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type attackfail = AttackRecord;

declare const enum AttackRecord {
    FAIL_NO = 0,
    FAIL_TERRAIN_MISS = 1,
    FAIL_SOURCE_MISS = 2,
    FAIL_TARGET_EVADED = 3,
    FAIL_TARGET_INVULNERABLE = 4,
    FAIL_TARGET_OUT_OF_RANGE = 5,
    CANNOT_FAIL = 6,
    FAIL_BLOCKED_BY_OBSTRUCTION = 7,
}

declare const enum AttributeDerivedStats {
    STRENGTH_DAMAGE = 0,
    STRENGTH_HP = 1,
    STRENGTH_HP_REGEN = 2,
    AGILITY_DAMAGE = 3,
    AGILITY_ARMOR = 4,
    AGILITY_ATTACK_SPEED = 5,
    INTELLIGENCE_DAMAGE = 6,
    INTELLIGENCE_MANA = 7,
    INTELLIGENCE_MANA_REGEN = 8,
    INTELLIGENCE_MAGIC_RESIST = 9,
    ALL_DAMAGE = 10,
}

declare const enum Attributes {
    INVALID = -1,
    STRENGTH = 0,
    AGILITY = 1,
    INTELLECT = 2,
    ALL = 3,
    MAX = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type CLICK_BEHAVIORS = ClickBehaviors;

declare const enum ClickBehaviors {
    NONE = 0,
    MOVE = 1,
    ATTACK = 2,
    CAST = 3,
    DROP_ITEM = 4,
    DROP_SHOP_ITEM = 5,
    DRAG = 6,
    LEARN_ABILITY = 7,
    PATROL = 8,
    VECTOR_CAST = 9,
    UNUSED = 10,
    RADAR = 11,
    LAST = 12,
}

declare const enum ConVarFlags {
    NONE = 0,
    DEVELOPMENTONLY = 2,
    HIDDEN = 16,
    /**
     * Makes the ConVar value hidden from all clients (for example sv_password).
     *
     * Reported as "prot" by cvarlist.
     */
    PROTECTED = 32,
    /**
     * Executing the command or changing the ConVar is only allowed in singleplayer.
     *
     * Reported as "sp" by cvarlist.
     */
    SPONLY = 64,
    /**
     * Save the ConVar value into config.cfg.
     *
     * Reported as "a" by cvarlist, except Lua ConVars.
     */
    ARCHIVE = 128,
    /**
     * For serverside ConVars, notifies all players with blue chat text when the value
     * gets changed.
     *
     * Reported as "nf" by cvarlist.
     */
    NOTIFY = 256,
    /**
     * For clientside commands, sends the value to the server.
     *
     * Reported as "user" by cvarlist.
     */
    USERINFO = 512,
    /**
     * Don't log the ConVar changes to console/log files/users.
     *
     * Reported as "log" by cvarlist.
     */
    UNLOGGED = 2048,
    /**
     * For serverside ConVars, it will send its value to all clients. The ConVar with
     * the same name must also exist on the client!
     *
     * Reported as "rep" by cvarlist.
     */
    REPLICATED = 8192,
    /**
     * Requires sv_cheats to be enabled to change the ConVar or run the command.
     *
     * Reported as "cheat" by cvarlist.
     */
    CHEAT = 16384,
    PER_USER = 32768,
    /**
     * Force the ConVar to be recorded by demo recordings.
     *
     * Reported as "demo" by cvarlist.
     */
    DEMO = 65536,
    /**
     * Opposite of FCVAR_DEMO, ensures the ConVar is not recorded in demos.
     *
     * Reported as "norecord" by cvarlist.
     */
    DONTRECORD = 131072,
    VCONSOLE_SET_FOCUS = 134217728,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DAMAGE_TYPES = DamageTypes;

declare const enum DamageTypes {
    NONE = 0,
    PHYSICAL = 1,
    MAGICAL = 2,
    PURE = 4,
    ALL = 7,
    HP_REMOVAL = 8,
    ABILITY_DEFINED = 16,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DamageCategory_t = DamageCategory;

declare const enum DamageCategory {
    SPELL = 0,
    ATTACK = 1,
    BARRIER = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_ABILITY_BEHAVIOR = AbilityBehavior;

declare const enum AbilityBehavior {
    LAST_RESORT_POINT = -2147483648,
    AFFECTED_BY_MUTE = 0,
    ALT_CASTABLE = 0,
    CAN_SELF_CAST = 0,
    DONT_PROC_OTHER_ABILITIES = 0,
    FORCE_KEYBIND = 0,
    FORCE_NO_INNATE_UI = 0,
    FREE_DRAW_TARGETING = 0,
    IGNORE_INVISIBLE = 0,
    IGNORE_MUTED = 0,
    IGNORE_SILENCE = 0,
    INNATE_UI = 0,
    IS_FAKE_ITEM = 0,
    ITEM_IMBUE = 0,
    NONE = 0,
    OVERSHOOT = 0,
    SHOW_IN_GUIDES = 0,
    SKIP_FOR_KEYBINDS = 0,
    SUPPRESS_ASSOCIATED_CONSUMABLE = 0,
    UNLOCKED_BY_EFFECT_INDEX = 0,
    UNSWAPPABLE = 0,
    HIDDEN = 1,
    PASSIVE = 2,
    NO_TARGET = 4,
    UNIT_TARGET = 8,
    POINT = 16,
    AOE = 32,
    NOT_LEARNABLE = 64,
    CHANNELLED = 128,
    ITEM = 256,
    TOGGLE = 512,
    DIRECTIONAL = 1024,
    IMMEDIATE = 2048,
    AUTOCAST = 4096,
    OPTIONAL_UNIT_TARGET = 8192,
    OPTIONAL_POINT = 16384,
    OPTIONAL_NO_TARGET = 32768,
    AURA = 65536,
    ATTACK = 131072,
    DONT_RESUME_MOVEMENT = 262144,
    ROOT_DISABLES = 524288,
    UNRESTRICTED = 1048576,
    IGNORE_PSEUDO_QUEUE = 2097152,
    IGNORE_CHANNEL = 4194304,
    DONT_CANCEL_MOVEMENT = 8388608,
    DONT_ALERT_TARGET = 16777216,
    DONT_RESUME_ATTACK = 33554432,
    NORMAL_WHEN_STOLEN = 67108864,
    IGNORE_BACKSWING = 134217728,
    RUNE_TARGET = 268435456,
    DONT_CANCEL_CHANNEL = 536870912,
    VECTOR_TARGETING = 1073741824,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GameState = GameState;

declare const enum GameState {
    INIT = 0,
    WAIT_FOR_PLAYERS_TO_LOAD = 1,
    CUSTOM_GAME_SETUP = 2,
    PLAYER_DRAFT = 3,
    HERO_SELECTION = 4,
    STRATEGY_TIME = 5,
    TEAM_SHOWCASE = 6,
    WAIT_FOR_MAP_TO_LOAD = 7,
    PRE_GAME = 8,
    SCENARIO_SETUP = 9,
    GAME_IN_PROGRESS = 10,
    POST_GAME = 11,
    DISCONNECT = 12,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_GC_TEAM = GcTeam;

declare const enum GcTeam {
    GOOD_GUYS = 0,
    BAD_GUYS = 1,
    BROADCASTER = 2,
    SPECTATOR = 3,
    PLAYER_POOL = 4,
    NOTEAM = 5,
    CUSTOM_1 = 6,
    CUSTOM_2 = 7,
    CUSTOM_3 = 8,
    CUSTOM_4 = 9,
    CUSTOM_5 = 10,
    CUSTOM_6 = 11,
    CUSTOM_7 = 12,
    CUSTOM_8 = 13,
    NEUTRALS = 14,
}

declare const DOTA_HEROPICK_STATE_COUNT: 62;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_HeroPickState = HeroPickState;

declare const enum HeroPickState {
    NONE = 0,
    AP_SELECT = 1,
    SD_SELECT = 2,
    INTRO_SELECT_UNUSED = 3,
    RD_SELECT_UNUSED = 4,
    CM_INTRO = 5,
    CM_CAPTAINPICK = 6,
    CM_BAN1 = 7,
    CM_BAN2 = 8,
    CM_BAN3 = 9,
    CM_BAN4 = 10,
    CM_BAN5 = 11,
    CM_BAN6 = 12,
    CM_BAN7 = 13,
    CM_BAN8 = 14,
    CM_BAN9 = 15,
    CM_BAN10 = 16,
    CM_BAN11 = 17,
    CM_BAN12 = 18,
    CM_BAN13 = 19,
    CM_BAN14 = 20,
    CM_SELECT1 = 21,
    CM_SELECT2 = 22,
    CM_SELECT3 = 23,
    CM_SELECT4 = 24,
    CM_SELECT5 = 25,
    CM_SELECT6 = 26,
    CM_SELECT7 = 27,
    CM_SELECT8 = 28,
    CM_SELECT9 = 29,
    CM_SELECT10 = 30,
    CM_PICK = 31,
    AR_SELECT = 32,
    MO_SELECT = 33,
    FH_SELECT = 34,
    CD_INTRO = 35,
    CD_CAPTAINPICK = 36,
    CD_BAN1 = 37,
    CD_BAN2 = 38,
    CD_BAN3 = 39,
    CD_BAN4 = 40,
    CD_BAN5 = 41,
    CD_BAN6 = 42,
    CD_SELECT1 = 43,
    CD_SELECT2 = 44,
    CD_SELECT3 = 45,
    CD_SELECT4 = 46,
    CD_SELECT5 = 47,
    CD_SELECT6 = 48,
    CD_SELECT7 = 49,
    CD_SELECT8 = 50,
    CD_SELECT9 = 51,
    CD_SELECT10 = 52,
    CD_PICK = 53,
    BD_SELECT = 54,
    ABILITY_DRAFT_SELECT = 55,
    ARDM_SELECT = 56,
    ALL_DRAFT_SELECT = 57,
    CUSTOMGAME_SELECT = 58,
    SELECT_PENALTY = 59,
    CUSTOM_PICK_RULES = 60,
    SCENARIO_PICK = 61,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_INVALID_ORDERS = InvalidOrders;

declare const enum InvalidOrders {
    ORDER_SUCCESS = -1,
    INVALID_ORDER_NOT_CONTROLLABLE_BY_PLAYER = 0,
    INVALID_ORDER_UNIT_IS_NOT_NPC = 1,
    INVALID_ORDER_BAD_ABILITY_ENTITY = 2,
    INVALID_ORDER_UNRECOGNIZED_ORDER = 3,
    INVALID_ORDER_ABILITY_REQUIRED = 4,
    INVALID_ORDER_NPC_TARGET_REQUIRED = 5,
    INVALID_ORDER_TARGET_TREE_INDEX_NOT_A_TREE = 6,
    INVALID_ORDER_TARGET_ENTITY_INDEX_OUT_OF_RANGE = 7,
    INVALID_ORDER_ABILITY_NOT_AN_ITEM = 8,
    INVALID_ORDER_PHYSICAL_ITEM_TARGET_REQUIRED = 9,
    INVALID_ORDER_RUNE_TARGET_REQUIRED = 10,
    INVALID_ORDER_ABILITY_NOT_OWNED_BY_UNIT = 11,
    INVALID_ORDER_ABILITY_CANT_BE_UPGRADED = 12,
    INVALID_ORDER_NO_POINTS_FOR_ABILITY_UPGRADE = 13,
    INVALID_ORDER_NOT_ENOUGH_MANA = 14,
    INVALID_ORDER_ABILITY_IN_COOLDOWN = 15,
    INVALID_ORDER_ABILITY_NOT_LEARNED = 16,
    INVALID_ORDER_CANT_CAST_PASSIVE_ABILITY = 17,
    INVALID_ORDER_PHANTOM_TARGET = 18,
    INVALID_ORDER_DEAD_TARGET = 19,
    INVALID_ORDER_UNIT_IS_DEAD = 20,
    INVALID_ORDER_TARGET_MAGIC_IMMUNE_ENEMY = 21,
    INVALID_ORDER_TARGET_INVULNERABLE = 22,
    INVALID_ORDER_TARGET_ATTACK_IMMUNE = 23,
    INVALID_ORDER_UNIT_SILENCED = 24,
    INVALID_ORDER_ABILITY_CANT_BE_TOGGLED = 25,
    INVALID_ORDER_TARGET_CANT_BE_SEEN = 26,
    INVALID_ORDER_TARGET_INVISIBLE = 27,
    INVALID_ORDER_HERO_CANT_BE_DENIED = 28,
    INVALID_ORDER_CANT_CAST_ON_TEAMMATE = 29,
    INVALID_ORDER_CANT_CAST_ON_ENEMY = 30,
    INVALID_ORDER_UNIT_CANT_MOVE = 31,
    INVALID_ORDER_CANT_CAST_ON_ATTACK_IMMUNE = 32,
    INVALID_ORDER_PURCHASE_INVALID_ITEM = 33,
    INVALID_ORDER_ITEM_NOT_IN_INVENTORY = 34,
    INVALID_ORDER_ITEM_NOT_IN_UNIT_INVENTORY = 35,
    INVALID_ORDER_TARGET_UNSELECTABLE = 36,
    INVALID_ORDER_ITEM_NOT_IN_ACTIVE_INVENTORY = 37,
    INVALID_ORDER_UNIT_CANT_PICK_UP_RUNES = 38,
    INVALID_ORDER_UNIT_CANT_MANIPULATE_ITEMS = 39,
    INVALID_ORDER_UNIT_IS_ILLUSION = 40,
    INVALID_ORDER_UNIT_CANT_ATTACK = 41,
    INVALID_ORDER_ITEM_CANT_BE_DROPPED = 42,
    INVALID_ORDER_TARGET_TREE_NOT_ACTIVE = 43,
    INVALID_ORDER_ABILITY_CANT_AUTO_CAST = 44,
    INVALID_ORDER_TARGET_POSITION_OFF_MAP = 45,
    INVALID_ORDER_UNIT_CANT_MOVE_TARGET_OUT_OF_RANGE = 46,
    INVALID_ORDER_CANT_CAST_ON_HERO = 47,
    INVALID_ORDER_CANT_CAST_ON_OTHER = 48,
    INVALID_ORDER_CANT_CAST_ON_BUILDING = 49,
    INVALID_ORDER_CANT_CAST_ON_ANCIENT = 50,
    INVALID_ORDER_ITEM_CANT_BE_MOVED_TO_STASH = 51,
    INVALID_ORDER_ITEM_CANT_BE_MOVED_TO_SLOT = 52,
    INVALID_ORDER_CANT_CAST_ON_MECHANICAL = 53,
    INVALID_ORDER_CANT_ACCEPT_ATTACK_TARGET = 54,
    INVALID_ORDER_CANT_CAST_NO_CHARGES = 55,
    INVALID_ORDER_CANT_CAST_ON_CREEP = 56,
    INVALID_ORDER_TARGET_CANT_TAKE_ITEMS = 57,
    INVALID_ORDER_CANT_GIVE_ITEM_TO_ENEMY = 58,
    INVALID_ORDER_CANT_CAST_ON_COURIER = 59,
    INVALID_ORDER_ABILITY_IS_HIDDEN = 60,
    INVALID_ORDER_ITEM_IN_COOLDOWN = 61,
    INVALID_ORDER_SECRET_SHOP_NOT_IN_RANGE = 62,
    INVALID_ORDER_NOT_ENOUGH_GOLD = 63,
    INVALID_ORDER_PURCHASE_AUTOCOMBINE_RECIPE = 64,
    INVALID_ORDER_CANT_DENY_HEALTH_TOO_HIGH = 65,
    INVALID_ORDER_SIDE_SHOP_NOT_IN_RANGE = 66,
    INVALID_ORDER_HOME_SHOP_NOT_IN_RANGE = 67,
    INVALID_ORDER_CANT_PICK_UP_ITEM = 68,
    INVALID_ORDER_CANT_SELL_NO_SHOP_IN_RANGE = 69,
    INVALID_ORDER_CANT_SELL_ITEM = 70,
    INVALID_ORDER_CANT_SELL_ITEM_WHILE_DEAD = 71,
    INVALID_ORDER_TARGET_CANT_BE_DENIED = 72,
    INVALID_ORDER_ABILITY_DISABLED_BY_ROOT = 73,
    INVALID_ORDER_UNIT_COMMAND_RESTRICTED = 74,
    INVALID_ORDER_UNIT_MUTED = 75,
    INVALID_ORDER_CANT_CAST_ON_SUMMONED = 76,
    INVALID_ORDER_TARGET_MAGIC_IMMUNE_ALLY = 77,
    INVALID_ORDER_CANT_PURCHASE_DISALLOWED_ITEM = 78,
    INVALID_ORDER_CANT_CAST_ON_DOMINATED = 79,
    INVALID_ORDER_CAST_CUSTOM = 80,
    INVALID_ORDER_ITEM_NOT_DISASSEMBLABLE = 81,
    INVALID_ORDER_ITEM_OUT_OF_STOCK = 82,
    INVALID_ORDER_ABILITY_CANT_BE_UPGRADED_AT_MAX = 83,
    INVALID_ORDER_ABILITY_INACTIVE = 84,
    INVALID_ORDER_ITEM_NOT_IN_MAIN_INVENTORY = 85,
    INVALID_ORDER_CANT_GLYPH = 86,
    INVALID_ORDER_CANT_DRAG_CHANNELING_ITEM = 87,
    INVALID_ORDER_CANT_BUYBACK_UNIT_NOT_A_HERO = 88,
    INVALID_ORDER_CANT_BUYBACK_UNIT_NOT_DEAD = 89,
    INVALID_ORDER_CANT_BUYBACK_NOT_ENOUGH_GOLD = 90,
    INVALID_ORDER_CANT_BUYBACK_IN_COOLDOWN = 91,
    INVALID_ORDER_CANT_DISASSEMBLE_STASH_OUT_OF_RANGE = 92,
    INVALID_ORDER_CANT_EJECT_ITEM_NOT_IN_STASH = 93,
    INVALID_ORDER_GAME_IS_PAUSED = 94,
    INVALID_ORDER_CANT_CAST_ON_CONSIDERED_HERO = 95,
    INVALID_ORDER_CANT_SHOP_AUTO_BUY_ENABLED = 96,
    INVALID_ORDER_ONLY_DELIBERATE_CHANNELING_CANCEL = 97,
    INVALID_ORDER_CANT_BUYBACK_DEVILS_BARGAIN = 98,
    INVALID_ORDER_CANT_BUYBACK_DISABLED_BY_GAME_MODE = 99,
    INVALID_ORDER_CANT_ABILITY_PING_BAD_TEAM = 100,
    INVALID_ORDER_ABILITY_NOT_POSITIONED = 101,
    INVALID_ORDER_ABILITY_NOT_TARGETTED = 102,
    INVALID_ORDER_ABILITY_REQUIRES_TARGET = 103,
    INVALID_ORDER_CANT_RADAR = 104,
    INVALID_ORDER_NO_COURIER = 105,
    INVALID_ORDER_CUSTOM_SHOP_NOT_IN_RANGE = 106,
    INVALID_ORDER_CANT_CAST_RIVER_PAINT = 107,
    INVALID_ORDER_UNIT_OBSTRUCTED = 108,
    INVALID_ORDER_CANT_CAST_DRAG_REQUIRED = 109,
    INVALID_ORDER_ABILITY_DISABLED_BY_TETHER = 110,
    INVALID_ORDER_ABILITY_NOT_UNLOCKED = 111,
    INVALID_ORDER_CANT_FOUNTAIN_DROP_UNIT_NOT_DEAD = 112,
    INVALID_ORDER_ITEM_NOT_IN_NEUTRAL_ITEM_STASH = 113,
    INVALID_ORDER_ITEM_ALREADY_PURCHASED = 114,
    INVALID_ORDER_BEYOND_PHYSICAL_ITEM_LIMIT = 115,
    INVALID_ORDER_ABILITY_PING_DEAD_ALLY = 116,
    INVALID_ORDER_CANT_LOCKCOMBINE_NEUTRAL_ITEMS = 117,
    INVALID_ORDER_ABILITY_CANT_ALT_CAST = 118,
    INVALID_ORDER_ITEM_CANNOT_BE_CONSUMED = 119,
    INVALID_ORDER_CANT_BUYBACK_CEASELESS_DIRGE = 120,
    INVALID_ORDER_CANT_ATTACK_BUILDINGS = 121,
    INVALID_ORDER_PURCHASE_LEVEL = 122,
    INVALID_ORDER_COUNT = 123,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_MOTION_CONTROLLER_PRIORITY = MotionControllerPriority;

declare const enum MotionControllerPriority {
    LOWEST = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    HIGHEST = 4,
    ULTRA = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_OVERHEAD_ALERT = OverheadAlert;

declare const enum OverheadAlert {
    GOLD = 0,
    DENY = 1,
    CRITICAL = 2,
    XP = 3,
    BONUS_SPELL_DAMAGE = 4,
    MISS = 5,
    DAMAGE = 6,
    EVADE = 7,
    BLOCK = 8,
    BONUS_POISON_DAMAGE = 9,
    HEAL = 10,
    MANA_ADD = 11,
    MANA_LOSS = 12,
    MAGICAL_BLOCK = 16,
    INCOMING_DAMAGE = 17,
    OUTGOING_DAMAGE = 18,
    DISABLE_RESIST = 19,
    DEATH = 20,
    BLOCKED = 21,
    ITEM_RECEIVED = 22,
    SHARD = 23,
    DEADLY_BLOW = 24,
    FORCE_MISS = 25,
    AEGIS = 26,
    DISPEL = 27,
    BONUS_PURE_DAMAGE = 28,
}

declare const DOTA_RUNE_COUNT: 10;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_RUNES = RuneType;

declare const enum RuneType {
    INVALID = -1,
    DOUBLEDAMAGE = 0,
    HASTE = 1,
    ILLUSION = 2,
    INVISIBILITY = 3,
    REGENERATION = 4,
    BOUNTY = 5,
    ARCANE = 6,
    WATER = 7,
    XP = 8,
    SHIELD = 9,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_SHOP_TYPE = ShopType;

declare const enum ShopType {
    HOME = 0,
    SIDE = 1,
    SECRET = 2,
    GROUND = 3,
    SIDE_2 = 4,
    SECRET_2 = 5,
    CUSTOM = 6,
    NEUTRALS = 7,
    NONE = 8,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_FLAGS = UnitTargetFlags;

declare const enum UnitTargetFlags {
    NONE = 0,
    RANGED_ONLY = 2,
    MELEE_ONLY = 4,
    DEAD = 8,
    MAGIC_IMMUNE_ENEMIES = 16,
    NOT_MAGIC_IMMUNE_ALLIES = 32,
    INVULNERABLE = 64,
    FOW_VISIBLE = 128,
    NO_INVIS = 256,
    CAN_BE_SEEN = 384,
    NOT_ANCIENTS = 512,
    PLAYER_CONTROLLED = 1024,
    NOT_DOMINATED = 2048,
    NOT_SUMMONED = 4096,
    NOT_ILLUSIONS = 8192,
    NOT_ATTACK_IMMUNE = 16384,
    MANA_ONLY = 32768,
    CHECK_DISABLE_HELP = 65536,
    NOT_CREEP_HERO = 131072,
    OUT_OF_WORLD = 262144,
    NOT_NIGHTMARED = 524288,
    PREFER_ENEMIES = 1048576,
    RESPECT_OBSTRUCTIONS = 2097152,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_TEAM = UnitTargetTeam;

declare const enum UnitTargetTeam {
    NONE = 0,
    FRIENDLY = 1,
    ENEMY = 2,
    BOTH = 3,
    CUSTOM = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTA_UNIT_TARGET_TYPE = UnitTargetType;

declare const enum UnitTargetType {
    NONE = 0,
    HERO = 1,
    CREEP = 2,
    BUILDING = 4,
    COURIER = 16,
    BASIC = 18,
    HEROES_AND_CREEPS = 19,
    OTHER = 32,
    ALL = 55,
    TREE = 64,
    CUSTOM = 128,
    SELF = 256,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAAbilitySpeakTrigger_t = AbilitySpeakTrigger;

declare const enum AbilitySpeakTrigger {
    START_ACTION_PHASE = 0,
    CAST = 1,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAConnectionState_t = ConnectionState;

declare const enum ConnectionState {
    UNKNOWN = 0,
    NOT_YET_CONNECTED = 1,
    CONNECTED = 2,
    DISCONNECTED = 3,
    ABANDONED = 4,
    LOADING = 5,
    FAILED = 6,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTACustomCameraEventFlags_t = CustomCameraEventFlags;

declare const enum CustomCameraEventFlags {
    ZOOM = 1,
    POSITION = 2,
    POSITION_PLAYER_HERO = 4,
    PITCH = 8,
    YAW = 16,
    LOCK = 32,
    UNLOCK = 64,
    RESET_DEFAULT = 128,
    SPECIFIC_PLAYER = 256,
    FADE_OUT = 512,
    FADE_IN = 1024,
    LETTERBOX_ON = 2048,
    LETTERBOX_OFF = 4096,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTADamageFlag_t = DamageFlag;

declare const enum DamageFlag {
    NONE = 0,
    IGNORES_MAGIC_ARMOR = 1,
    IGNORES_PHYSICAL_ARMOR = 2,
    BYPASSES_INVULNERABILITY = 4,
    BYPASSES_PHYSICAL_BLOCK = 8,
    REFLECTION = 16,
    HPLOSS = 32,
    NO_DIRECTOR_EVENT = 64,
    NON_LETHAL = 128,
    NO_DAMAGE_MULTIPLIERS = 512,
    NO_SPELL_AMPLIFICATION = 1024,
    DONT_DISPLAY_DAMAGE_IF_SOURCE_HIDDEN = 2048,
    NO_SPELL_LIFESTEAL = 4096,
    PROPERTY_FIRE = 8192,
    IGNORES_BASE_PHYSICAL_ARMOR = 16384,
    SECONDARY_PROJECTILE_ATTACK = 32768,
    FORCE_SPELL_AMPLIFICATION = 65536,
    MAGIC_AUTO_ATTACK = 131072,
    ATTACK_MODIFIER = 262144,
    BYPASSES_ALL_BLOCK = 524288,
    NO_REFLECTION = 1048576,
}

declare const DOTA_DEFAULT_UI_ELEMENT_COUNT: 32;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DotaDefaultUIElement_t = DefaultUiElement;

declare const enum DefaultUiElement {
    INVALID = -1,
    TOP_TIMEOFDAY = 0,
    TOP_HEROES = 1,
    FLYOUT_SCOREBOARD = 2,
    ACTION_PANEL = 3,
    ACTION_MINIMAP = 4,
    INVENTORY_PANEL = 5,
    INVENTORY_SHOP = 6,
    INVENTORY_ITEMS = 7,
    INVENTORY_QUICKBUY = 8,
    INVENTORY_COURIER = 9,
    INVENTORY_PROTECT = 10,
    INVENTORY_GOLD = 11,
    SHOP_SUGGESTEDITEMS = 12,
    SHOP_COMMONITEMS = 13,
    HERO_SELECTION_TEAMS = 14,
    HERO_SELECTION_GAME_NAME = 15,
    HERO_SELECTION_CLOCK = 16,
    HERO_SELECTION_HEADER = 17,
    TOP_MENU_BUTTONS = 18,
    TOP_BAR_BACKGROUND = 19,
    TOP_BAR_RADIANT_TEAM = 20,
    TOP_BAR_DIRE_TEAM = 21,
    TOP_BAR_SCORE = 22,
    ENDGAME = 23,
    ENDGAME_CHAT = 24,
    QUICK_STATS = 25,
    PREGAME_STRATEGYUI = 26,
    KILLCAM = 27,
    FIGHT_RECAP = 28,
    TOP_BAR = 29,
    CUSTOMUI_BEHIND_HUD_ELEMENTS = 30,
    AGHANIMS_STATUS = 31,
}

declare const DOTA_HUD_VISIBILITY_COUNT: 32;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAHUDVisibility_t = HudVisibility;

declare const enum HudVisibility {
    VISIBILITY_INVALID = -1,
    VISIBILITY_TOP_TIMEOFDAY = 0,
    VISIBILITY_TOP_HEROES = 1,
    VISIBILITY_TOP_SCOREBOARD = 2,
    VISIBILITY_ACTION_PANEL = 3,
    VISIBILITY_ACTION_MINIMAP = 4,
    VISIBILITY_INVENTORY_PANEL = 5,
    VISIBILITY_INVENTORY_SHOP = 6,
    VISIBILITY_INVENTORY_ITEMS = 7,
    VISIBILITY_INVENTORY_QUICKBUY = 8,
    VISIBILITY_INVENTORY_COURIER = 9,
    VISIBILITY_INVENTORY_PROTECT = 10,
    VISIBILITY_INVENTORY_GOLD = 11,
    VISIBILITY_SHOP_SUGGESTEDITEMS = 12,
    VISIBILITY_SHOP_COMMONITEMS = 13,
    VISIBILITY_HERO_SELECTION_TEAMS = 14,
    VISIBILITY_HERO_SELECTION_GAME_NAME = 15,
    VISIBILITY_HERO_SELECTION_CLOCK = 16,
    VISIBILITY_HERO_SELECTION_HEADER = 17,
    VISIBILITY_TOP_MENU_BUTTONS = 18,
    VISIBILITY_TOP_BAR_BACKGROUND = 19,
    VISIBILITY_TOP_BAR_RADIANT_TEAM = 20,
    VISIBILITY_TOP_BAR_DIRE_TEAM = 21,
    VISIBILITY_TOP_BAR_SCORE = 22,
    VISIBILITY_ENDGAME = 23,
    VISIBILITY_ENDGAME_CHAT = 24,
    VISIBILITY_QUICK_STATS = 25,
    VISIBILITY_PREGAME_STRATEGYUI = 26,
    VISIBILITY_KILLCAM = 27,
    VISIBILITY_FIGHT_RECAP = 28,
    VISIBILITY_TOP_BAR = 29,
    CUSTOMUI_BEHIND_HUD_ELEMENTS = 30,
    VISIBILITY_AGHANIMS_STATUS = 31,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAInventoryFlags_t = InventoryFlags;

declare const enum InventoryFlags {
    ALLOW_NONE = 0,
    ALLOW_MAIN = 1,
    ALLOW_STASH = 2,
    ALL_ACCESS = 3,
    ALLOW_DROP_ON_GROUND = 4,
    ALLOW_DROP_AT_FOUNTAIN = 8,
    LIMIT_DROP_ON_GROUND = 16,
}

/**
 * Default number of players per team.
 */
declare const DOTA_DEFAULT_MAX_TEAM: 5;

/**
 * Default number of non-spectator players supported.
 */
declare const DOTA_DEFAULT_MAX_TEAM_PLAYERS: 10;

/**
 * Max number of player teams supported.
 */
declare const DOTA_MAX_PLAYER_TEAMS: 10;

/**
 * Max number of viewers in a spectator lobby.
 */
declare const DOTA_MAX_SPECTATOR_LOBBY_SIZE: 15;

/**
 * Max number of players per team.
 */
declare const DOTA_MAX_TEAM: 24;

/**
 * Max number of non-spectator players supported.
 */
declare const DOTA_MAX_TEAM_PLAYERS: 24;

/**
 * How many spectators can watch.
 */
declare const DOTA_MAX_SPECTATOR_TEAM_SIZE: 40;

/**
 * Max number of players connected to the server including spectators.
 */
declare const DOTA_MAX_PLAYERS: 64;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMinimapEvent_t = MinimapEventType;

declare const enum MinimapEventType {
    ANCIENT_UNDER_ATTACK = 2,
    BASE_UNDER_ATTACK = 4,
    BASE_GLYPHED = 8,
    TEAMMATE_UNDER_ATTACK = 16,
    TEAMMATE_TELEPORTING = 32,
    TEAMMATE_DIED = 64,
    TUTORIAL_TASK_ACTIVE = 128,
    TUTORIAL_TASK_FINISHED = 256,
    HINT_LOCATION = 512,
    ENEMY_TELEPORTING = 1024,
    CANCEL_TELEPORTING = 2048,
    RADAR = 4096,
    RADAR_TARGET = 8192,
    MOVE_TO_TARGET = 16384,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAModifierAttribute_t = ModifierAttribute;

declare const enum ModifierAttribute {
    /**
     * 无特殊属性（默认）
     */ NONE = 0,
    /**
     * 永久状态（例：冰）
     */
    PERMANENT = 1,
    /**
     * 独立结算（例：沸血之矛）
     */
    MULTIPLE = 2,
    /**
     * 可对无敌单位生效（例：衰退光环）
     */
    IGNORE_INVULNERABLE = 4,
    /**
     * 光环优先级（未知）
     */
    AURA_PRIORITY = 8,
    /**
     * 忽略躲避（未知）
     */
    IGNORE_DODGE = 16,
    /**
     * 可被复制（未知）
     */
    DUPLICATED = 32,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAMusicStatus_t = MusicStatus;

declare const enum MusicStatus {
    NONE = 0,
    EXPLORATION = 1,
    BATTLE = 2,
    PRE_GAME_EXPLORATION = 3,
    DEAD = 4,
    LAST = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAPostGameColumn_t = PostGameColumn;

declare const enum PostGameColumn {
    LEVEL = 0,
    ITEMS = 1,
    KILLS = 2,
    DEATHS = 3,
    ASSISTS = 4,
    NET_WORTH = 5,
    LAST_HITS = 6,
    DENIES = 7,
    DAMAGE = 8,
    HEALING = 9,
    MAX = 10,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAPostGameLayout_t = PostGameLayout;

declare const enum PostGameLayout {
    DOUBLE_COLUMN = 0,
    SINGLE_COLUMN = 1,
    MAX = 2,
}

declare const DOTA_PROJECTILE_ATTACHMENT_LAST: 6;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAProjectileAttachment_t = ProjectileAttachment;

declare const enum ProjectileAttachment {
    NONE = 0,
    ATTACK_1 = 1,
    ATTACK_2 = 2,
    HITLOCATION = 3,
    ATTACK_3 = 4,
    ATTACK_4 = 5,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAScriptInventorySlot_t = InventorySlot;

declare const enum InventorySlot {
    SLOT_1 = 0,
    SLOT_2 = 1,
    SLOT_3 = 2,
    SLOT_4 = 3,
    SLOT_5 = 4,
    SLOT_6 = 5,
    SLOT_7 = 6,
    SLOT_8 = 7,
    SLOT_9 = 8,
    STASH_1 = 9,
    STASH_2 = 10,
    STASH_3 = 11,
    STASH_4 = 12,
    STASH_5 = 13,
    STASH_6 = 14,
    TP_SCROLL = 15,
    NEUTRAL_ACTIVE_SLOT = 16,
    NEUTRAL_PASSIVE_SLOT = 17,
    TRANSIENT_ITEM = 23,
    TRANSIENT_RECIPE = 24,
    TRANSIENT_CAST_ITEM = 26,
}

declare const DOTA_PLAYER_LOADOUT_START: 70;

declare const DOTA_PLAYER_LOADOUT_END: 101;

declare const DOTA_LOADOUT_TYPE_COUNT: 103;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASlotType_t = LoadoutType;

declare const enum LoadoutType {
    TYPE_INVALID = -1,
    TYPE_WEAPON = 0,
    TYPE_OFFHAND_WEAPON = 1,
    TYPE_WEAPON_2 = 2,
    TYPE_OFFHAND_WEAPON_2 = 3,
    TYPE_HEAD = 4,
    TYPE_SHOULDER = 5,
    TYPE_ARMS = 6,
    TYPE_ARMOR = 7,
    TYPE_BELT = 8,
    TYPE_NECK = 9,
    TYPE_BACK = 10,
    TYPE_GLOVES = 11,
    TYPE_LEGS = 12,
    TYPE_TAIL = 13,
    TYPE_MISC = 14,
    TYPE_COSTUME = 15,
    TYPE_HERO_BASE = 16,
    TYPE_BODY_HEAD = 17,
    TYPE_MOUNT = 18,
    TYPE_SUMMON = 19,
    TYPE_SHAPESHIFT = 20,
    TYPE_TAUNT = 21,
    TYPE_HERO_EFFIGY = 22,
    TYPE_AMBIENT_EFFECTS = 23,
    TYPE_ABILITY_ATTACK = 24,
    TYPE_ABILITY_1 = 25,
    TYPE_ABILITY_2 = 26,
    TYPE_ABILITY_3 = 27,
    TYPE_ABILITY_4 = 28,
    TYPE_ABILITY_ULTIMATE = 29,
    TYPE_ABILITY_EFFECTS_1 = 30,
    TYPE_ABILITY_EFFECTS_2 = 31,
    TYPE_ABILITY_EFFECTS_3 = 32,
    TYPE_ABILITY_EFFECTS_4 = 33,
    TYPE_ABILITY_EFFECTS_5 = 34,
    TYPE_ABILITY_EFFECTS_6 = 35,
    TYPE_ABILITY_EFFECTS_7 = 36,
    TYPE_ABILITY_EFFECTS_8 = 37,
    TYPE_ABILITY_EFFECTS_9 = 38,
    TYPE_VOICE = 39,
    PERSONA_1_START = 40,
    TYPE_WEAPON_PERSONA_1 = 40,
    TYPE_OFFHAND_WEAPON_PERSONA_1 = 41,
    TYPE_WEAPON_2_PERSONA_1 = 42,
    TYPE_OFFHAND_WEAPON_2_PERSONA_1 = 43,
    TYPE_HEAD_PERSONA_1 = 44,
    TYPE_SHOULDER_PERSONA_1 = 45,
    TYPE_ARMS_PERSONA_1 = 46,
    TYPE_ARMOR_PERSONA_1 = 47,
    TYPE_BELT_PERSONA_1 = 48,
    TYPE_NECK_PERSONA_1 = 49,
    TYPE_BACK_PERSONA_1 = 50,
    TYPE_LEGS_PERSONA_1 = 51,
    TYPE_GLOVES_PERSONA_1 = 52,
    TYPE_TAIL_PERSONA_1 = 53,
    TYPE_MISC_PERSONA_1 = 54,
    TYPE_BODY_HEAD_PERSONA_1 = 55,
    TYPE_MOUNT_PERSONA_1 = 56,
    TYPE_SUMMON_PERSONA_1 = 57,
    TYPE_SHAPESHIFT_PERSONA_1 = 58,
    TYPE_TAUNT_PERSONA_1 = 59,
    TYPE_HERO_EFFIGY_PERSONA_1 = 60,
    TYPE_AMBIENT_EFFECTS_PERSONA_1 = 61,
    TYPE_ABILITY_ATTACK_PERSONA_1 = 62,
    TYPE_ABILITY_1_PERSONA_1 = 63,
    TYPE_ABILITY_2_PERSONA_1 = 64,
    TYPE_ABILITY_3_PERSONA_1 = 65,
    TYPE_ABILITY_4_PERSONA_1 = 66,
    TYPE_ABILITY_ULTIMATE_PERSONA_1 = 67,
    PERSONA_1_END = 68,
    TYPE_VOICE_PERSONA_1 = 68,
    TYPE_PERSONA_SELECTOR = 69,
    TYPE_COURIER = 70,
    TYPE_ANNOUNCER = 71,
    TYPE_MEGA_KILLS = 72,
    TYPE_MUSIC = 73,
    TYPE_WARD = 74,
    TYPE_HUD_SKIN = 75,
    TYPE_LOADING_SCREEN = 76,
    TYPE_WEATHER = 77,
    TYPE_HEROIC_STATUE = 78,
    TYPE_MULTIKILL_BANNER = 79,
    TYPE_CURSOR_PACK = 80,
    TYPE_TELEPORT_EFFECT = 81,
    TYPE_BLINK_EFFECT = 82,
    TYPE_EMBLEM = 83,
    TYPE_TERRAIN = 84,
    TYPE_RADIANT_CREEPS = 85,
    TYPE_DIRE_CREEPS = 86,
    TYPE_RADIANT_TOWER = 87,
    TYPE_DIRE_TOWER = 88,
    TYPE_VERSUS_SCREEN = 89,
    TYPE_STREAK_EFFECT = 90,
    TYPE_KILL_EFFECT = 91,
    TYPE_DEATH_EFFECT = 92,
    TYPE_HEAD_EFFECT = 93,
    TYPE_MAP_EFFECT = 94,
    TYPE_COURIER_EFFECT = 95,
    TYPE_RADIANT_SIEGE_CREEPS = 96,
    TYPE_DIRE_SIEGE_CREEPS = 97,
    TYPE_ROSHAN = 98,
    TYPE_TORMENTOR = 99,
    TYPE_ANCIENT = 100,
    TYPE_PET_EFFIGY = 101,
    TYPE_NONE = 102,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTASpeechType_t = SpeechType;

declare const enum SpeechType {
    USER_INVALID = 0,
    USER_SINGLE = 1,
    USER_TEAM = 2,
    USER_TEAM_NEARBY = 3,
    USER_NEARBY = 4,
    USER_ALL = 5,
    GOOD_TEAM = 6,
    BAD_TEAM = 7,
    SPECTATOR = 8,
    USER_TEAM_NOSPECTATOR = 9,
    RECIPIENT_TYPE_MAX = 10,
}

declare const DOTA_TEAM_FIRST: 2;

declare const DOTA_TEAM_CUSTOM_MIN: 6;

declare const DOTA_TEAM_CUSTOM_COUNT: 8;

declare const DOTA_TEAM_CUSTOM_MAX: 13;

declare const DOTA_TEAM_COUNT: 15;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTATeam_t = DotaTeam;

declare const enum DotaTeam {
    GOODGUYS = 2,
    BADGUYS = 3,
    NEUTRALS = 4,
    NOTEAM = 5,
    CUSTOM_1 = 6,
    CUSTOM_2 = 7,
    CUSTOM_3 = 8,
    CUSTOM_4 = 9,
    CUSTOM_5 = 10,
    CUSTOM_6 = 11,
    CUSTOM_7 = 12,
    CUSTOM_8 = 13,
    DRAFT_POOL = 14,
}

declare const DOTA_UNIT_ATTACK_CAPABILITY_BIT_COUNT: 3;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitAttackCapability_t = UnitAttackCapability;

declare const enum UnitAttackCapability {
    NO_ATTACK = 0,
    MELEE_ATTACK = 1,
    RANGED_ATTACK = 2,
    RANGED_ATTACK_DIRECTIONAL = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type DOTAUnitMoveCapability_t = UnitMoveCapability;

declare const enum UnitMoveCapability {
    NONE = 0,
    GROUND = 1,
    FLY = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type dotaunitorder_t = UnitOrder;

declare const enum UnitOrder {
    NONE = 0,
    MOVE_TO_POSITION = 1,
    MOVE_TO_TARGET = 2,
    ATTACK_MOVE = 3,
    ATTACK_TARGET = 4,
    CAST_POSITION = 5,
    CAST_TARGET = 6,
    CAST_TARGET_TREE = 7,
    CAST_NO_TARGET = 8,
    CAST_TOGGLE = 9,
    HOLD_POSITION = 10,
    TRAIN_ABILITY = 11,
    DROP_ITEM = 12,
    GIVE_ITEM = 13,
    PICKUP_ITEM = 14,
    PICKUP_RUNE = 15,
    PURCHASE_ITEM = 16,
    SELL_ITEM = 17,
    DISASSEMBLE_ITEM = 18,
    MOVE_ITEM = 19,
    CAST_TOGGLE_AUTO = 20,
    STOP = 21,
    TAUNT = 22,
    BUYBACK = 23,
    GLYPH = 24,
    EJECT_ITEM_FROM_STASH = 25,
    CAST_RUNE = 26,
    PING_ABILITY = 27,
    MOVE_TO_DIRECTION = 28,
    PATROL = 29,
    VECTOR_TARGET_POSITION = 30,
    RADAR = 31,
    SET_ITEM_COMBINE_LOCK = 32,
    CONTINUE = 33,
    VECTOR_TARGET_CANCELED = 34,
    CAST_RIVER_PAINT = 35,
    PREGAME_ADJUST_ITEM_ASSIGNMENT = 36,
    DROP_ITEM_AT_FOUNTAIN = 37,
    TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH = 38,
    MOVE_RELATIVE = 39,
    CAST_TOGGLE_ALT = 40,
    CONSUME_ITEM = 41,
    SET_ITEM_MARK_FOR_SELL = 42,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyGold_Reason = ModifyGoldReason;

declare const enum ModifyGoldReason {
    UNSPECIFIED = 0,
    DEATH = 1,
    BUYBACK = 2,
    PURCHASE_CONSUMABLE = 3,
    PURCHASE_ITEM = 4,
    ABANDONED_REDISTRIBUTE = 5,
    SELL_ITEM = 6,
    ABILITY_COST = 7,
    CHEAT_COMMAND = 8,
    SELECTION_PENALTY = 9,
    GAME_TICK = 10,
    BUILDING = 11,
    HERO_KILL = 12,
    CREEP_KILL = 13,
    NEUTRAL_KILL = 14,
    ROSHAN_KILL = 15,
    COURIER_KILL = 16,
    BOUNTY_RUNE = 17,
    SHARED_GOLD = 18,
    ABILITY_GOLD = 19,
    WARD_KILL = 20,
    COURIER_KILLED_BY_THIS_PLAYER = 21,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EDOTA_ModifyXP_Reason = ModifyXpReason;

declare const enum ModifyXpReason {
    UNSPECIFIED = 0,
    HERO_KILL = 1,
    CREEP_KILL = 2,
    ROSHAN_KILL = 3,
    TOME_OF_KNOWLEDGE = 4,
    OUTPOST = 5,
    CATCH_UP = 6,
    HERO_ABILITY = 7,
    MAX = 8,
}

declare const enum EntityEffects {
    EF_NODRAW = 32,
}

declare const enum EntityThinkPhase {
    RESIM = 0,
    RESENSING = 1,
    OSTSENSING = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type EShareAbility = ItemShareability;

declare const enum ItemShareability {
    FULLY_SHAREABLE = 0,
    PARTIALLY_SHAREABLE = 1,
    NOT_SHAREABLE = 2,
}

declare const enum FindOrder {
    ANY = 0,
    CLOSEST = 1,
    FARTHEST = 2,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type GameActivity_t = GameActivity;

declare const enum GameActivity {
    RESET = 0,
    IDLE = 1,
    TRANSITION = 2,
    COVER = 3,
    COVER_MED = 4,
    COVER_LOW = 5,
    WALK = 6,
    WALK_AIM = 7,
    WALK_CROUCH = 8,
    WALK_CROUCH_AIM = 9,
    RUN = 10,
    RUN_AIM = 11,
    RUN_CROUCH = 12,
    RUN_CROUCH_AIM = 13,
    RUN_PROTECTED = 14,
    SCRIPT_CUSTOM_MOVE = 15,
    RANGE_ATTACK_1 = 16,
    RANGE_ATTACK_2 = 17,
    RANGE_ATTACK_1_LOW = 18,
    RANGE_ATTACK_2_LOW = 19,
    DIESIMPLE = 20,
    DIEBACKWARD = 21,
    DIEFORWARD = 22,
    DIEVIOLENT = 23,
    DIERAGDOLL = 24,
    FLY = 25,
    HOVER = 26,
    GLIDE = 27,
    SWIM = 28,
    JUMP = 29,
    HOP = 30,
    LEAP = 31,
    LAND = 32,
    CLIMB_UP = 33,
    CLIMB_DOWN = 34,
    CLIMB_DISMOUNT = 35,
    SHIPLADDER_UP = 36,
    SHIPLADDER_DOWN = 37,
    STRAFE_LEFT = 38,
    STRAFE_RIGHT = 39,
    ROLL_LEFT = 40,
    ROLL_RIGHT = 41,
    TURN_LEFT = 42,
    TURN_RIGHT = 43,
    CROUCH = 44,
    CROUCHIDLE = 45,
    STAND = 46,
    USE = 47,
    ALIEN_BURROW_IDLE = 48,
    ALIEN_BURROW_OUT = 49,
    SIGNAL_1 = 50,
    SIGNAL_2 = 51,
    SIGNAL_3 = 52,
    SIGNAL_ADVANCE = 53,
    SIGNAL_FORWARD = 54,
    SIGNAL_GROUP = 55,
    SIGNAL_HALT = 56,
    SIGNAL_LEFT = 57,
    SIGNAL_RIGHT = 58,
    SIGNAL_TAKECOVER = 59,
    LOOKBACK_RIGHT = 60,
    LOOKBACK_LEFT = 61,
    COWER = 62,
    SMALL_FLINCH = 63,
    BIG_FLINCH = 64,
    MELEE_ATTACK_1 = 65,
    MELEE_ATTACK_2 = 66,
    RELOAD = 67,
    RELOAD_START = 68,
    RELOAD_FINISH = 69,
    RELOAD_LOW = 70,
    ARM = 71,
    DISARM = 72,
    DROP_WEAPON = 73,
    DROP_WEAPON_SHOTGUN = 74,
    PICKUP_GROUND = 75,
    PICKUP_RACK = 76,
    IDLE_ANGRY = 77,
    IDLE_RELAXED = 78,
    IDLE_STIMULATED = 79,
    IDLE_AGITATED = 80,
    IDLE_STEALTH = 81,
    IDLE_HURT = 82,
    WALK_RELAXED = 83,
    WALK_STIMULATED = 84,
    WALK_AGITATED = 85,
    WALK_STEALTH = 86,
    RUN_RELAXED = 87,
    RUN_STIMULATED = 88,
    RUN_AGITATED = 89,
    RUN_STEALTH = 90,
    IDLE_AIM_RELAXED = 91,
    IDLE_AIM_STIMULATED = 92,
    IDLE_AIM_AGITATED = 93,
    IDLE_AIM_STEALTH = 94,
    WALK_AIM_RELAXED = 95,
    WALK_AIM_STIMULATED = 96,
    WALK_AIM_AGITATED = 97,
    WALK_AIM_STEALTH = 98,
    RUN_AIM_RELAXED = 99,
    RUN_AIM_STIMULATED = 100,
    RUN_AIM_AGITATED = 101,
    RUN_AIM_STEALTH = 102,
    CROUCHIDLE_STIMULATED = 103,
    CROUCHIDLE_AIM_STIMULATED = 104,
    CROUCHIDLE_AGITATED = 105,
    WALK_HURT = 106,
    RUN_HURT = 107,
    SPECIAL_ATTACK_1 = 108,
    SPECIAL_ATTACK_2 = 109,
    COMBAT_IDLE = 110,
    WALK_SCARED = 111,
    RUN_SCARED = 112,
    VICTORY_DANCE = 113,
    DIE_HEADSHOT = 114,
    DIE_CHESTSHOT = 115,
    DIE_GUTSHOT = 116,
    DIE_BACKSHOT = 117,
    FLINCH_HEAD = 118,
    FLINCH_CHEST = 119,
    FLINCH_STOMACH = 120,
    FLINCH_LEFTARM = 121,
    FLINCH_RIGHTARM = 122,
    FLINCH_LEFTLEG = 123,
    FLINCH_RIGHTLEG = 124,
    FLINCH_PHYSICS = 125,
    FLINCH_HEAD_BACK = 126,
    FLINCH_CHEST_BACK = 127,
    FLINCH_STOMACH_BACK = 128,
    FLINCH_CROUCH_FRONT = 129,
    FLINCH_CROUCH_BACK = 130,
    FLINCH_CROUCH_LEFT = 131,
    FLINCH_CROUCH_RIGHT = 132,
    IDLE_ON_FIRE = 133,
    WALK_ON_FIRE = 134,
    RUN_ON_FIRE = 135,
    '180_LEFT' = 137,
    '180_RIGHT' = 138,
    '90_LEFT' = 139,
    '90_RIGHT' = 140,
    STEP_LEFT = 141,
    STEP_RIGHT = 142,
    STEP_BACK = 143,
    STEP_FORE = 144,
    GESTURE_RANGE_ATTACK_1 = 145,
    GESTURE_RANGE_ATTACK_2 = 146,
    GESTURE_MELEE_ATTACK_1 = 147,
    GESTURE_MELEE_ATTACK_2 = 148,
    GESTURE_RANGE_ATTACK_1_LOW = 149,
    GESTURE_RANGE_ATTACK_2_LOW = 150,
    MELEE_ATTACK_SWING_GESTURE = 151,
    GESTURE_SMALL_FLINCH = 152,
    GESTURE_BIG_FLINCH = 153,
    GESTURE_FLINCH_BLAST = 154,
    GESTURE_FLINCH_BLAST_SHOTGUN = 155,
    GESTURE_FLINCH_BLAST_DAMAGED = 156,
    GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN = 157,
    GESTURE_FLINCH_HEAD = 158,
    GESTURE_FLINCH_CHEST = 159,
    GESTURE_FLINCH_STOMACH = 160,
    GESTURE_FLINCH_LEFTARM = 161,
    GESTURE_FLINCH_RIGHTARM = 162,
    GESTURE_FLINCH_LEFTLEG = 163,
    GESTURE_FLINCH_RIGHTLEG = 164,
    GESTURE_TURN_LEFT = 165,
    GESTURE_TURN_RIGHT = 166,
    GESTURE_TURN_LEFT_45 = 167,
    GESTURE_TURN_RIGHT_45 = 168,
    GESTURE_TURN_LEFT_90 = 169,
    GESTURE_TURN_RIGHT_90 = 170,
    GESTURE_TURN_LEFT_45_FLAT = 171,
    GESTURE_TURN_RIGHT_45_FLAT = 172,
    GESTURE_TURN_LEFT_90_FLAT = 173,
    GESTURE_TURN_RIGHT_90_FLAT = 174,
    BARNACLE_HIT = 175,
    BARNACLE_PULL = 176,
    BARNACLE_CHOMP = 177,
    BARNACLE_CHEW = 178,
    DO_NOT_DISTURB = 179,
    SPECIFIC_SEQUENCE = 180,
    VM_DEPLOY = 181,
    VM_RELOAD_EMPTY = 182,
    VM_DRAW = 183,
    VM_HOLSTER = 184,
    VM_IDLE = 185,
    VM_FIDGET = 186,
    VM_PULLBACK = 187,
    VM_PULLBACK_HIGH = 188,
    VM_PULLBACK_LOW = 189,
    VM_THROW = 190,
    VM_DROP = 191,
    VM_PULLPIN = 192,
    VM_PRIMARYATTACK = 193,
    VM_SECONDARYATTACK = 194,
    VM_RELOAD = 195,
    VM_DRYFIRE = 196,
    VM_HITLEFT = 197,
    VM_HITLEFT_2 = 198,
    VM_HITRIGHT = 199,
    VM_HITRIGHT_2 = 200,
    VM_HITCENTER = 201,
    VM_HITCENTER_2 = 202,
    VM_MISSLEFT = 203,
    VM_MISSLEFT_2 = 204,
    VM_MISSRIGHT = 205,
    VM_MISSRIGHT_2 = 206,
    VM_MISSCENTER = 207,
    VM_MISSCENTER_2 = 208,
    VM_HAULBACK = 209,
    VM_SWINGHARD = 210,
    VM_SWINGMISS = 211,
    VM_SWINGHIT = 212,
    VM_IDLE_TO_LOWERED = 213,
    VM_IDLE_LOWERED = 214,
    VM_LOWERED_TO_IDLE = 215,
    VM_RECOIL_1 = 216,
    VM_RECOIL_2 = 217,
    VM_RECOIL_3 = 218,
    VM_PICKUP = 219,
    VM_RELEASE = 220,
    VM_MAUL_LOOP = 221,
    VM_ATTACH_SILENCER = 222,
    VM_DETACH_SILENCER = 223,
    SLAM_STICKWALL_IDLE = 224,
    SLAM_STICKWALL_ND_IDLE = 225,
    SLAM_STICKWALL_ATTACH = 226,
    SLAM_STICKWALL_ATTACH_2 = 227,
    SLAM_STICKWALL_ND_ATTACH = 228,
    SLAM_STICKWALL_ND_ATTACH_2 = 229,
    SLAM_STICKWALL_DETONATE = 230,
    SLAM_STICKWALL_DETONATOR_HOLSTER = 231,
    SLAM_STICKWALL_DRAW = 232,
    SLAM_STICKWALL_ND_DRAW = 233,
    SLAM_STICKWALL_TO_THROW = 234,
    SLAM_STICKWALL_TO_THROW_ND = 235,
    SLAM_STICKWALL_TO_TRIPMINE_ND = 236,
    SLAM_THROW_IDLE = 237,
    SLAM_THROW_ND_IDLE = 238,
    SLAM_THROW_THROW = 239,
    SLAM_THROW_THROW_2 = 240,
    SLAM_THROW_THROW_ND = 241,
    SLAM_THROW_THROW_ND_2 = 242,
    SLAM_THROW_DRAW = 243,
    SLAM_THROW_ND_DRAW = 244,
    SLAM_THROW_TO_STICKWALL = 245,
    SLAM_THROW_TO_STICKWALL_ND = 246,
    SLAM_THROW_DETONATE = 247,
    SLAM_THROW_DETONATOR_HOLSTER = 248,
    SLAM_THROW_TO_TRIPMINE_ND = 249,
    SLAM_TRIPMINE_IDLE = 250,
    SLAM_TRIPMINE_DRAW = 251,
    SLAM_TRIPMINE_ATTACH = 252,
    SLAM_TRIPMINE_ATTACH_2 = 253,
    SLAM_TRIPMINE_TO_STICKWALL_ND = 254,
    SLAM_TRIPMINE_TO_THROW_ND = 255,
    SLAM_DETONATOR_IDLE = 256,
    SLAM_DETONATOR_DRAW = 257,
    SLAM_DETONATOR_DETONATE = 258,
    SLAM_DETONATOR_HOLSTER = 259,
    SLAM_DETONATOR_STICKWALL_DRAW = 260,
    SLAM_DETONATOR_THROW_DRAW = 261,
    SHOTGUN_RELOAD_START = 262,
    SHOTGUN_RELOAD_FINISH = 263,
    SHOTGUN_PUMP = 264,
    SMG_2_IDLE_2 = 265,
    SMG_2_FIRE_2 = 266,
    SMG_2_DRAW_2 = 267,
    SMG_2_RELOAD_2 = 268,
    SMG_2_DRYFIRE_2 = 269,
    SMG_2_TOAUTO = 270,
    SMG_2_TOBURST = 271,
    PHYSCANNON_UPGRADE = 272,
    RANGE_ATTACK_AR_1 = 273,
    RANGE_ATTACK_AR_2 = 274,
    RANGE_ATTACK_AR_2_LOW = 275,
    RANGE_ATTACK_AR_2_GRENADE = 276,
    RANGE_ATTACK_HMG_1 = 277,
    RANGE_ATTACK_ML = 278,
    RANGE_ATTACK_SMG_1 = 279,
    RANGE_ATTACK_SMG_1_LOW = 280,
    RANGE_ATTACK_SMG_2 = 281,
    RANGE_ATTACK_SHOTGUN = 282,
    RANGE_ATTACK_SHOTGUN_LOW = 283,
    RANGE_ATTACK_PISTOL = 284,
    RANGE_ATTACK_PISTOL_LOW = 285,
    RANGE_ATTACK_SLAM = 286,
    RANGE_ATTACK_TRIPWIRE = 287,
    RANGE_ATTACK_THROW = 288,
    RANGE_ATTACK_SNIPER_RIFLE = 289,
    RANGE_ATTACK_RPG = 290,
    MELEE_ATTACK_SWING = 291,
    RANGE_AIM_LOW = 292,
    RANGE_AIM_SMG_1_LOW = 293,
    RANGE_AIM_PISTOL_LOW = 294,
    RANGE_AIM_AR_2_LOW = 295,
    COVER_PISTOL_LOW = 296,
    COVER_SMG_1_LOW = 297,
    GESTURE_RANGE_ATTACK_AR_1 = 298,
    GESTURE_RANGE_ATTACK_AR_2 = 299,
    GESTURE_RANGE_ATTACK_AR_2_GRENADE = 300,
    GESTURE_RANGE_ATTACK_HMG_1 = 301,
    GESTURE_RANGE_ATTACK_ML = 302,
    GESTURE_RANGE_ATTACK_SMG_1 = 303,
    GESTURE_RANGE_ATTACK_SMG_1_LOW = 304,
    GESTURE_RANGE_ATTACK_SMG_2 = 305,
    GESTURE_RANGE_ATTACK_SHOTGUN = 306,
    GESTURE_RANGE_ATTACK_PISTOL = 307,
    GESTURE_RANGE_ATTACK_PISTOL_LOW = 308,
    GESTURE_RANGE_ATTACK_SLAM = 309,
    GESTURE_RANGE_ATTACK_TRIPWIRE = 310,
    GESTURE_RANGE_ATTACK_THROW = 311,
    GESTURE_RANGE_ATTACK_SNIPER_RIFLE = 312,
    GESTURE_MELEE_ATTACK_SWING = 313,
    IDLE_RIFLE = 314,
    IDLE_SMG_1 = 315,
    IDLE_ANGRY_SMG_1 = 316,
    IDLE_PISTOL = 317,
    IDLE_ANGRY_PISTOL = 318,
    IDLE_ANGRY_SHOTGUN = 319,
    IDLE_STEALTH_PISTOL = 320,
    IDLE_PACKAGE = 321,
    WALK_PACKAGE = 322,
    IDLE_SUITCASE = 323,
    WALK_SUITCASE = 324,
    IDLE_SMG_1_RELAXED = 325,
    IDLE_SMG_1_STIMULATED = 326,
    WALK_RIFLE_RELAXED = 327,
    RUN_RIFLE_RELAXED = 328,
    WALK_RIFLE_STIMULATED = 329,
    RUN_RIFLE_STIMULATED = 330,
    IDLE_AIM_RIFLE_STIMULATED = 331,
    WALK_AIM_RIFLE_STIMULATED = 332,
    RUN_AIM_RIFLE_STIMULATED = 333,
    IDLE_SHOTGUN_RELAXED = 334,
    IDLE_SHOTGUN_STIMULATED = 335,
    IDLE_SHOTGUN_AGITATED = 336,
    WALK_ANGRY = 337,
    POLICE_HARASS_1 = 338,
    POLICE_HARASS_2 = 339,
    IDLE_MANNEDGUN = 340,
    IDLE_MELEE = 341,
    IDLE_ANGRY_MELEE = 342,
    IDLE_RPG_RELAXED = 343,
    IDLE_RPG = 344,
    IDLE_ANGRY_RPG = 345,
    COVER_LOW_RPG = 346,
    WALK_RPG = 347,
    RUN_RPG = 348,
    WALK_CROUCH_RPG = 349,
    RUN_CROUCH_RPG = 350,
    WALK_RPG_RELAXED = 351,
    RUN_RPG_RELAXED = 352,
    WALK_RIFLE = 353,
    WALK_AIM_RIFLE = 354,
    WALK_CROUCH_RIFLE = 355,
    WALK_CROUCH_AIM_RIFLE = 356,
    RUN_RIFLE = 357,
    RUN_AIM_RIFLE = 358,
    RUN_CROUCH_RIFLE = 359,
    RUN_CROUCH_AIM_RIFLE = 360,
    RUN_STEALTH_PISTOL = 361,
    WALK_AIM_SHOTGUN = 362,
    RUN_AIM_SHOTGUN = 363,
    WALK_PISTOL = 364,
    RUN_PISTOL = 365,
    WALK_AIM_PISTOL = 366,
    RUN_AIM_PISTOL = 367,
    WALK_STEALTH_PISTOL = 368,
    WALK_AIM_STEALTH_PISTOL = 369,
    RUN_AIM_STEALTH_PISTOL = 370,
    RELOAD_PISTOL = 371,
    RELOAD_PISTOL_LOW = 372,
    RELOAD_SMG_1 = 373,
    RELOAD_SMG_1_LOW = 374,
    RELOAD_SHOTGUN = 375,
    RELOAD_SHOTGUN_LOW = 376,
    GESTURE_RELOAD = 377,
    GESTURE_RELOAD_PISTOL = 378,
    GESTURE_RELOAD_SMG_1 = 379,
    GESTURE_RELOAD_SHOTGUN = 380,
    BUSY_LEAN_LEFT = 381,
    BUSY_LEAN_LEFT_ENTRY = 382,
    BUSY_LEAN_LEFT_EXIT = 383,
    BUSY_LEAN_BACK = 384,
    BUSY_LEAN_BACK_ENTRY = 385,
    BUSY_LEAN_BACK_EXIT = 386,
    BUSY_SIT_GROUND = 387,
    BUSY_SIT_GROUND_ENTRY = 388,
    BUSY_SIT_GROUND_EXIT = 389,
    BUSY_SIT_CHAIR = 390,
    BUSY_SIT_CHAIR_ENTRY = 391,
    BUSY_SIT_CHAIR_EXIT = 392,
    BUSY_STAND = 393,
    BUSY_QUEUE = 394,
    DUCK_DODGE = 395,
    DIE_BARNACLE_SWALLOW = 396,
    GESTURE_BARNACLE_STRANGLE = 397,
    DIE_FRONTSIDE = 402,
    DIE_RIGHTSIDE = 403,
    DIE_BACKSIDE = 404,
    DIE_LEFTSIDE = 405,
    DIE_CROUCH_FRONTSIDE = 406,
    DIE_CROUCH_RIGHTSIDE = 407,
    DIE_CROUCH_BACKSIDE = 408,
    DIE_CROUCH_LEFTSIDE = 409,
    DIE_INCAP = 410,
    DIE_STANDING = 411,
    OPEN_DOOR = 412,
    DI_ALYX_ZOMBIE_MELEE = 413,
    DI_ALYX_ZOMBIE_TORSO_MELEE = 414,
    DI_ALYX_HEADCRAB_MELEE = 415,
    DI_ALYX_ANTLION = 416,
    DI_ALYX_ZOMBIE_SHOTGUN_64 = 417,
    DI_ALYX_ZOMBIE_SHOTGUN_26 = 418,
    READINESS_RELAXED_TO_STIMULATED = 419,
    READINESS_RELAXED_TO_STIMULATED_WALK = 420,
    READINESS_AGITATED_TO_STIMULATED = 421,
    READINESS_STIMULATED_TO_RELAXED = 422,
    READINESS_PISTOL_RELAXED_TO_STIMULATED = 423,
    READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK = 424,
    READINESS_PISTOL_AGITATED_TO_STIMULATED = 425,
    READINESS_PISTOL_STIMULATED_TO_RELAXED = 426,
    IDLE_CARRY = 427,
    WALK_CARRY = 428,
    STARTDYING = 429,
    DYINGLOOP = 430,
    DYINGTODEAD = 431,
    RIDE_MANNED_GUN = 432,
    VM_SPRINT_ENTER = 433,
    VM_SPRINT_IDLE = 434,
    VM_SPRINT_LEAVE = 435,
    FIRE_START = 436,
    FIRE_LOOP = 437,
    FIRE_END = 438,
    CROUCHING_GRENADEIDLE = 439,
    CROUCHING_GRENADEREADY = 440,
    CROUCHING_PRIMARYATTACK = 441,
    OVERLAY_GRENADEIDLE = 442,
    OVERLAY_GRENADEREADY = 443,
    OVERLAY_PRIMARYATTACK = 444,
    OVERLAY_SHIELD_UP = 445,
    OVERLAY_SHIELD_DOWN = 446,
    OVERLAY_SHIELD_UP_IDLE = 447,
    OVERLAY_SHIELD_ATTACK = 448,
    OVERLAY_SHIELD_KNOCKBACK = 449,
    SHIELD_UP = 450,
    SHIELD_DOWN = 451,
    SHIELD_UP_IDLE = 452,
    SHIELD_ATTACK = 453,
    SHIELD_KNOCKBACK = 454,
    CROUCHING_SHIELD_UP = 455,
    CROUCHING_SHIELD_DOWN = 456,
    CROUCHING_SHIELD_UP_IDLE = 457,
    CROUCHING_SHIELD_ATTACK = 458,
    CROUCHING_SHIELD_KNOCKBACK = 459,
    TURNRIGHT_45 = 460,
    TURNLEFT_45 = 461,
    TURN = 462,
    OBJ_ASSEMBLING = 463,
    OBJ_DISMANTLING = 464,
    OBJ_STARTUP = 465,
    OBJ_RUNNING = 466,
    OBJ_IDLE = 467,
    OBJ_PLACING = 468,
    OBJ_DETERIORATING = 469,
    OBJ_UPGRADING = 470,
    DEPLOY = 471,
    DEPLOY_IDLE = 472,
    UNDEPLOY = 473,
    CROSSBOW_DRAW_UNLOADED = 474,
    GAUSS_SPINUP = 475,
    GAUSS_SPINCYCLE = 476,
    VM_PRIMARYATTACK_SILENCED = 477,
    VM_RELOAD_SILENCED = 478,
    VM_DRYFIRE_SILENCED = 479,
    VM_IDLE_SILENCED = 480,
    VM_DRAW_SILENCED = 481,
    VM_IDLE_EMPTY_LEFT = 482,
    VM_DRYFIRE_LEFT = 483,
    VM_IS_DRAW = 484,
    VM_IS_HOLSTER = 485,
    VM_IS_IDLE = 486,
    VM_IS_PRIMARYATTACK = 487,
    PLAYER_IDLE_FIRE = 488,
    PLAYER_CROUCH_FIRE = 489,
    PLAYER_CROUCH_WALK_FIRE = 490,
    PLAYER_WALK_FIRE = 491,
    PLAYER_RUN_FIRE = 492,
    IDLETORUN = 493,
    RUNTOIDLE = 494,
    VM_DRAW_DEPLOYED = 495,
    HL_2_MP_IDLE_MELEE = 496,
    HL_2_MP_RUN_MELEE = 497,
    HL_2_MP_IDLE_CROUCH_MELEE = 498,
    HL_2_MP_WALK_CROUCH_MELEE = 499,
    HL_2_MP_GESTURE_RANGE_ATTACK_MELEE = 500,
    HL_2_MP_GESTURE_RELOAD_MELEE = 501,
    HL_2_MP_JUMP_MELEE = 502,
    MP_STAND_IDLE = 503,
    MP_CROUCH_IDLE = 504,
    MP_CROUCH_DEPLOYED_IDLE = 505,
    MP_CROUCH_DEPLOYED = 506,
    MP_DEPLOYED_IDLE = 507,
    MP_RUN = 508,
    MP_WALK = 509,
    MP_AIRWALK = 510,
    MP_CROUCHWALK = 511,
    MP_SPRINT = 512,
    MP_JUMP = 513,
    MP_JUMP_START = 514,
    MP_JUMP_FLOAT = 515,
    MP_JUMP_LAND = 516,
    MP_DOUBLEJUMP = 517,
    MP_SWIM = 518,
    MP_DEPLOYED = 519,
    MP_SWIM_DEPLOYED = 520,
    MP_VCD = 521,
    MP_ATTACK_STAND_PRIMARYFIRE = 522,
    MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED = 523,
    MP_ATTACK_STAND_SECONDARYFIRE = 524,
    MP_ATTACK_STAND_GRENADE = 525,
    MP_ATTACK_CROUCH_PRIMARYFIRE = 526,
    MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED = 527,
    MP_ATTACK_CROUCH_SECONDARYFIRE = 528,
    MP_ATTACK_CROUCH_GRENADE = 529,
    MP_ATTACK_SWIM_PRIMARYFIRE = 530,
    MP_ATTACK_SWIM_SECONDARYFIRE = 531,
    MP_ATTACK_SWIM_GRENADE = 532,
    MP_ATTACK_AIRWALK_PRIMARYFIRE = 533,
    MP_ATTACK_AIRWALK_SECONDARYFIRE = 534,
    MP_ATTACK_AIRWALK_GRENADE = 535,
    MP_RELOAD_STAND = 536,
    MP_RELOAD_STAND_LOOP = 537,
    MP_RELOAD_STAND_END = 538,
    MP_RELOAD_CROUCH = 539,
    MP_RELOAD_CROUCH_LOOP = 540,
    MP_RELOAD_CROUCH_END = 541,
    MP_RELOAD_SWIM = 542,
    MP_RELOAD_SWIM_LOOP = 543,
    MP_RELOAD_SWIM_END = 544,
    MP_RELOAD_AIRWALK = 545,
    MP_RELOAD_AIRWALK_LOOP = 546,
    MP_RELOAD_AIRWALK_END = 547,
    MP_ATTACK_STAND_PREFIRE = 548,
    MP_ATTACK_STAND_POSTFIRE = 549,
    MP_ATTACK_STAND_STARTFIRE = 550,
    MP_ATTACK_CROUCH_PREFIRE = 551,
    MP_ATTACK_CROUCH_POSTFIRE = 552,
    MP_ATTACK_SWIM_PREFIRE = 553,
    MP_ATTACK_SWIM_POSTFIRE = 554,
    MP_STAND_PRIMARY = 555,
    MP_CROUCH_PRIMARY = 556,
    MP_RUN_PRIMARY = 557,
    MP_WALK_PRIMARY = 558,
    MP_AIRWALK_PRIMARY = 559,
    MP_CROUCHWALK_PRIMARY = 560,
    MP_JUMP_PRIMARY = 561,
    MP_JUMP_START_PRIMARY = 562,
    MP_JUMP_FLOAT_PRIMARY = 563,
    MP_JUMP_LAND_PRIMARY = 564,
    MP_SWIM_PRIMARY = 565,
    MP_DEPLOYED_PRIMARY = 566,
    MP_SWIM_DEPLOYED_PRIMARY = 567,
    MP_ATTACK_STAND_PRIMARY = 568,
    MP_ATTACK_STAND_PRIMARY_DEPLOYED = 569,
    MP_ATTACK_CROUCH_PRIMARY = 570,
    MP_ATTACK_CROUCH_PRIMARY_DEPLOYED = 571,
    MP_ATTACK_SWIM_PRIMARY = 572,
    MP_ATTACK_AIRWALK_PRIMARY = 573,
    MP_RELOAD_STAND_PRIMARY = 574,
    MP_RELOAD_STAND_PRIMARY_LOOP = 575,
    MP_RELOAD_STAND_PRIMARY_END = 576,
    MP_RELOAD_CROUCH_PRIMARY = 577,
    MP_RELOAD_CROUCH_PRIMARY_LOOP = 578,
    MP_RELOAD_CROUCH_PRIMARY_END = 579,
    MP_RELOAD_SWIM_PRIMARY = 580,
    MP_RELOAD_SWIM_PRIMARY_LOOP = 581,
    MP_RELOAD_SWIM_PRIMARY_END = 582,
    MP_RELOAD_AIRWALK_PRIMARY = 583,
    MP_RELOAD_AIRWALK_PRIMARY_LOOP = 584,
    MP_RELOAD_AIRWALK_PRIMARY_END = 585,
    MP_ATTACK_STAND_GRENADE_PRIMARY = 586,
    MP_ATTACK_CROUCH_GRENADE_PRIMARY = 587,
    MP_ATTACK_SWIM_GRENADE_PRIMARY = 588,
    MP_ATTACK_AIRWALK_GRENADE_PRIMARY = 589,
    MP_STAND_SECONDARY = 590,
    MP_CROUCH_SECONDARY = 591,
    MP_RUN_SECONDARY = 592,
    MP_WALK_SECONDARY = 593,
    MP_AIRWALK_SECONDARY = 594,
    MP_CROUCHWALK_SECONDARY = 595,
    MP_JUMP_SECONDARY = 596,
    MP_JUMP_START_SECONDARY = 597,
    MP_JUMP_FLOAT_SECONDARY = 598,
    MP_JUMP_LAND_SECONDARY = 599,
    MP_SWIM_SECONDARY = 600,
    MP_ATTACK_STAND_SECONDARY = 601,
    MP_ATTACK_CROUCH_SECONDARY = 602,
    MP_ATTACK_SWIM_SECONDARY = 603,
    MP_ATTACK_AIRWALK_SECONDARY = 604,
    MP_RELOAD_STAND_SECONDARY = 605,
    MP_RELOAD_STAND_SECONDARY_LOOP = 606,
    MP_RELOAD_STAND_SECONDARY_END = 607,
    MP_RELOAD_CROUCH_SECONDARY = 608,
    MP_RELOAD_CROUCH_SECONDARY_LOOP = 609,
    MP_RELOAD_CROUCH_SECONDARY_END = 610,
    MP_RELOAD_SWIM_SECONDARY = 611,
    MP_RELOAD_SWIM_SECONDARY_LOOP = 612,
    MP_RELOAD_SWIM_SECONDARY_END = 613,
    MP_RELOAD_AIRWALK_SECONDARY = 614,
    MP_RELOAD_AIRWALK_SECONDARY_LOOP = 615,
    MP_RELOAD_AIRWALK_SECONDARY_END = 616,
    MP_ATTACK_STAND_GRENADE_SECONDARY = 617,
    MP_ATTACK_CROUCH_GRENADE_SECONDARY = 618,
    MP_ATTACK_SWIM_GRENADE_SECONDARY = 619,
    MP_ATTACK_AIRWALK_GRENADE_SECONDARY = 620,
    MP_STAND_MELEE = 621,
    MP_CROUCH_MELEE = 622,
    MP_RUN_MELEE = 623,
    MP_WALK_MELEE = 624,
    MP_AIRWALK_MELEE = 625,
    MP_CROUCHWALK_MELEE = 626,
    MP_JUMP_MELEE = 627,
    MP_JUMP_START_MELEE = 628,
    MP_JUMP_FLOAT_MELEE = 629,
    MP_JUMP_LAND_MELEE = 630,
    MP_SWIM_MELEE = 631,
    MP_ATTACK_STAND_MELEE = 632,
    MP_ATTACK_STAND_MELEE_SECONDARY = 633,
    MP_ATTACK_CROUCH_MELEE = 634,
    MP_ATTACK_CROUCH_MELEE_SECONDARY = 635,
    MP_ATTACK_SWIM_MELEE = 636,
    MP_ATTACK_AIRWALK_MELEE = 637,
    MP_ATTACK_STAND_GRENADE_MELEE = 638,
    MP_ATTACK_CROUCH_GRENADE_MELEE = 639,
    MP_ATTACK_SWIM_GRENADE_MELEE = 640,
    MP_ATTACK_AIRWALK_GRENADE_MELEE = 641,
    MP_STAND_ITEM_1 = 642,
    MP_CROUCH_ITEM_1 = 643,
    MP_RUN_ITEM_1 = 644,
    MP_WALK_ITEM_1 = 645,
    MP_AIRWALK_ITEM_1 = 646,
    MP_CROUCHWALK_ITEM_1 = 647,
    MP_JUMP_ITEM_1 = 648,
    MP_JUMP_START_ITEM_1 = 649,
    MP_JUMP_FLOAT_ITEM_1 = 650,
    MP_JUMP_LAND_ITEM_1 = 651,
    MP_SWIM_ITEM_1 = 652,
    MP_ATTACK_STAND_ITEM_1 = 653,
    MP_ATTACK_STAND_ITEM_1_SECONDARY = 654,
    MP_ATTACK_CROUCH_ITEM_1 = 655,
    MP_ATTACK_CROUCH_ITEM_1_SECONDARY = 656,
    MP_ATTACK_SWIM_ITEM_1 = 657,
    MP_ATTACK_AIRWALK_ITEM_1 = 658,
    MP_STAND_ITEM_2 = 659,
    MP_CROUCH_ITEM_2 = 660,
    MP_RUN_ITEM_2 = 661,
    MP_WALK_ITEM_2 = 662,
    MP_AIRWALK_ITEM_2 = 663,
    MP_CROUCHWALK_ITEM_2 = 664,
    MP_JUMP_ITEM_2 = 665,
    MP_JUMP_START_ITEM_2 = 666,
    MP_JUMP_FLOAT_ITEM_2 = 667,
    MP_JUMP_LAND_ITEM_2 = 668,
    MP_SWIM_ITEM_2 = 669,
    MP_ATTACK_STAND_ITEM_2 = 670,
    MP_ATTACK_STAND_ITEM_2_SECONDARY = 671,
    MP_ATTACK_CROUCH_ITEM_2 = 672,
    MP_ATTACK_CROUCH_ITEM_2_SECONDARY = 673,
    MP_ATTACK_SWIM_ITEM_2 = 674,
    MP_ATTACK_AIRWALK_ITEM_2 = 675,
    MP_GESTURE_FLINCH = 676,
    MP_GESTURE_FLINCH_PRIMARY = 677,
    MP_GESTURE_FLINCH_SECONDARY = 678,
    MP_GESTURE_FLINCH_MELEE = 679,
    MP_GESTURE_FLINCH_ITEM_1 = 680,
    MP_GESTURE_FLINCH_ITEM_2 = 681,
    MP_GESTURE_FLINCH_HEAD = 682,
    MP_GESTURE_FLINCH_CHEST = 683,
    MP_GESTURE_FLINCH_STOMACH = 684,
    MP_GESTURE_FLINCH_LEFTARM = 685,
    MP_GESTURE_FLINCH_RIGHTARM = 686,
    MP_GESTURE_FLINCH_LEFTLEG = 687,
    MP_GESTURE_FLINCH_RIGHTLEG = 688,
    MP_GRENADE_1_DRAW = 689,
    MP_GRENADE_1_IDLE = 690,
    MP_GRENADE_1_ATTACK = 691,
    MP_GRENADE_2_DRAW = 692,
    MP_GRENADE_2_IDLE = 693,
    MP_GRENADE_2_ATTACK = 694,
    MP_PRIMARY_GRENADE_1_DRAW = 695,
    MP_PRIMARY_GRENADE_1_IDLE = 696,
    MP_PRIMARY_GRENADE_1_ATTACK = 697,
    MP_PRIMARY_GRENADE_2_DRAW = 698,
    MP_PRIMARY_GRENADE_2_IDLE = 699,
    MP_PRIMARY_GRENADE_2_ATTACK = 700,
    MP_SECONDARY_GRENADE_1_DRAW = 701,
    MP_SECONDARY_GRENADE_1_IDLE = 702,
    MP_SECONDARY_GRENADE_1_ATTACK = 703,
    MP_SECONDARY_GRENADE_2_DRAW = 704,
    MP_SECONDARY_GRENADE_2_IDLE = 705,
    MP_SECONDARY_GRENADE_2_ATTACK = 706,
    MP_MELEE_GRENADE_1_DRAW = 707,
    MP_MELEE_GRENADE_1_IDLE = 708,
    MP_MELEE_GRENADE_1_ATTACK = 709,
    MP_MELEE_GRENADE_2_DRAW = 710,
    MP_MELEE_GRENADE_2_IDLE = 711,
    MP_MELEE_GRENADE_2_ATTACK = 712,
    MP_ITEM_1_GRENADE_1_DRAW = 713,
    MP_ITEM_1_GRENADE_1_IDLE = 714,
    MP_ITEM_1_GRENADE_1_ATTACK = 715,
    MP_ITEM_1_GRENADE_2_DRAW = 716,
    MP_ITEM_1_GRENADE_2_IDLE = 717,
    MP_ITEM_1_GRENADE_2_ATTACK = 718,
    MP_ITEM_2_GRENADE_1_DRAW = 719,
    MP_ITEM_2_GRENADE_1_IDLE = 720,
    MP_ITEM_2_GRENADE_1_ATTACK = 721,
    MP_ITEM_2_GRENADE_2_DRAW = 722,
    MP_ITEM_2_GRENADE_2_IDLE = 723,
    MP_ITEM_2_GRENADE_2_ATTACK = 724,
    MP_STAND_BUILDING = 725,
    MP_CROUCH_BUILDING = 726,
    MP_RUN_BUILDING = 727,
    MP_WALK_BUILDING = 728,
    MP_AIRWALK_BUILDING = 729,
    MP_CROUCHWALK_BUILDING = 730,
    MP_JUMP_BUILDING = 731,
    MP_JUMP_START_BUILDING = 732,
    MP_JUMP_FLOAT_BUILDING = 733,
    MP_JUMP_LAND_BUILDING = 734,
    MP_SWIM_BUILDING = 735,
    MP_ATTACK_STAND_BUILDING = 736,
    MP_ATTACK_CROUCH_BUILDING = 737,
    MP_ATTACK_SWIM_BUILDING = 738,
    MP_ATTACK_AIRWALK_BUILDING = 739,
    MP_ATTACK_STAND_GRENADE_BUILDING = 740,
    MP_ATTACK_CROUCH_GRENADE_BUILDING = 741,
    MP_ATTACK_SWIM_GRENADE_BUILDING = 742,
    MP_ATTACK_AIRWALK_GRENADE_BUILDING = 743,
    MP_STAND_PDA = 744,
    MP_CROUCH_PDA = 745,
    MP_RUN_PDA = 746,
    MP_WALK_PDA = 747,
    MP_AIRWALK_PDA = 748,
    MP_CROUCHWALK_PDA = 749,
    MP_JUMP_PDA = 750,
    MP_JUMP_START_PDA = 751,
    MP_JUMP_FLOAT_PDA = 752,
    MP_JUMP_LAND_PDA = 753,
    MP_SWIM_PDA = 754,
    MP_ATTACK_STAND_PDA = 755,
    MP_ATTACK_SWIM_PDA = 756,
    MP_GESTURE_VC_HANDMOUTH = 757,
    MP_GESTURE_VC_FINGERPOINT = 758,
    MP_GESTURE_VC_FISTPUMP = 759,
    MP_GESTURE_VC_THUMBSUP = 760,
    MP_GESTURE_VC_NODYES = 761,
    MP_GESTURE_VC_NODNO = 762,
    MP_GESTURE_VC_HANDMOUTH_PRIMARY = 763,
    MP_GESTURE_VC_FINGERPOINT_PRIMARY = 764,
    MP_GESTURE_VC_FISTPUMP_PRIMARY = 765,
    MP_GESTURE_VC_THUMBSUP_PRIMARY = 766,
    MP_GESTURE_VC_NODYES_PRIMARY = 767,
    MP_GESTURE_VC_NODNO_PRIMARY = 768,
    MP_GESTURE_VC_HANDMOUTH_SECONDARY = 769,
    MP_GESTURE_VC_FINGERPOINT_SECONDARY = 770,
    MP_GESTURE_VC_FISTPUMP_SECONDARY = 771,
    MP_GESTURE_VC_THUMBSUP_SECONDARY = 772,
    MP_GESTURE_VC_NODYES_SECONDARY = 773,
    MP_GESTURE_VC_NODNO_SECONDARY = 774,
    MP_GESTURE_VC_HANDMOUTH_MELEE = 775,
    MP_GESTURE_VC_FINGERPOINT_MELEE = 776,
    MP_GESTURE_VC_FISTPUMP_MELEE = 777,
    MP_GESTURE_VC_THUMBSUP_MELEE = 778,
    MP_GESTURE_VC_NODYES_MELEE = 779,
    MP_GESTURE_VC_NODNO_MELEE = 780,
    MP_GESTURE_VC_HANDMOUTH_ITEM_1 = 781,
    MP_GESTURE_VC_FINGERPOINT_ITEM_1 = 782,
    MP_GESTURE_VC_FISTPUMP_ITEM_1 = 783,
    MP_GESTURE_VC_THUMBSUP_ITEM_1 = 784,
    MP_GESTURE_VC_NODYES_ITEM_1 = 785,
    MP_GESTURE_VC_NODNO_ITEM_1 = 786,
    MP_GESTURE_VC_HANDMOUTH_ITEM_2 = 787,
    MP_GESTURE_VC_FINGERPOINT_ITEM_2 = 788,
    MP_GESTURE_VC_FISTPUMP_ITEM_2 = 789,
    MP_GESTURE_VC_THUMBSUP_ITEM_2 = 790,
    MP_GESTURE_VC_NODYES_ITEM_2 = 791,
    MP_GESTURE_VC_NODNO_ITEM_2 = 792,
    MP_GESTURE_VC_HANDMOUTH_BUILDING = 793,
    MP_GESTURE_VC_FINGERPOINT_BUILDING = 794,
    MP_GESTURE_VC_FISTPUMP_BUILDING = 795,
    MP_GESTURE_VC_THUMBSUP_BUILDING = 796,
    MP_GESTURE_VC_NODYES_BUILDING = 797,
    MP_GESTURE_VC_NODNO_BUILDING = 798,
    MP_GESTURE_VC_HANDMOUTH_PDA = 799,
    MP_GESTURE_VC_FINGERPOINT_PDA = 800,
    MP_GESTURE_VC_FISTPUMP_PDA = 801,
    MP_GESTURE_VC_THUMBSUP_PDA = 802,
    MP_GESTURE_VC_NODYES_PDA = 803,
    MP_GESTURE_VC_NODNO_PDA = 804,
    VM_UNUSABLE = 805,
    VM_UNUSABLE_TO_USABLE = 806,
    VM_USABLE_TO_UNUSABLE = 807,
    PRIMARY_VM_DRAW = 808,
    PRIMARY_VM_HOLSTER = 809,
    PRIMARY_VM_IDLE = 810,
    PRIMARY_VM_PULLBACK = 811,
    PRIMARY_VM_PRIMARYATTACK = 812,
    PRIMARY_VM_SECONDARYATTACK = 813,
    PRIMARY_VM_RELOAD = 814,
    PRIMARY_VM_DRYFIRE = 815,
    PRIMARY_VM_IDLE_TO_LOWERED = 816,
    PRIMARY_VM_IDLE_LOWERED = 817,
    PRIMARY_VM_LOWERED_TO_IDLE = 818,
    SECONDARY_VM_DRAW = 819,
    SECONDARY_VM_HOLSTER = 820,
    SECONDARY_VM_IDLE = 821,
    SECONDARY_VM_PULLBACK = 822,
    SECONDARY_VM_PRIMARYATTACK = 823,
    SECONDARY_VM_SECONDARYATTACK = 824,
    SECONDARY_VM_RELOAD = 825,
    SECONDARY_VM_DRYFIRE = 826,
    SECONDARY_VM_IDLE_TO_LOWERED = 827,
    SECONDARY_VM_IDLE_LOWERED = 828,
    SECONDARY_VM_LOWERED_TO_IDLE = 829,
    MELEE_VM_DRAW = 830,
    MELEE_VM_HOLSTER = 831,
    MELEE_VM_IDLE = 832,
    MELEE_VM_PULLBACK = 833,
    MELEE_VM_PRIMARYATTACK = 834,
    MELEE_VM_SECONDARYATTACK = 835,
    MELEE_VM_RELOAD = 836,
    MELEE_VM_DRYFIRE = 837,
    MELEE_VM_IDLE_TO_LOWERED = 838,
    MELEE_VM_IDLE_LOWERED = 839,
    MELEE_VM_LOWERED_TO_IDLE = 840,
    PDA_VM_DRAW = 841,
    PDA_VM_HOLSTER = 842,
    PDA_VM_IDLE = 843,
    PDA_VM_PULLBACK = 844,
    PDA_VM_PRIMARYATTACK = 845,
    PDA_VM_SECONDARYATTACK = 846,
    PDA_VM_RELOAD = 847,
    PDA_VM_DRYFIRE = 848,
    PDA_VM_IDLE_TO_LOWERED = 849,
    PDA_VM_IDLE_LOWERED = 850,
    PDA_VM_LOWERED_TO_IDLE = 851,
    ITEM_1_VM_DRAW = 852,
    ITEM_1_VM_HOLSTER = 853,
    ITEM_1_VM_IDLE = 854,
    ITEM_1_VM_PULLBACK = 855,
    ITEM_1_VM_PRIMARYATTACK = 856,
    ITEM_1_VM_SECONDARYATTACK = 857,
    ITEM_1_VM_RELOAD = 858,
    ITEM_1_VM_DRYFIRE = 859,
    ITEM_1_VM_IDLE_TO_LOWERED = 860,
    ITEM_1_VM_IDLE_LOWERED = 861,
    ITEM_1_VM_LOWERED_TO_IDLE = 862,
    ITEM_2_VM_DRAW = 863,
    ITEM_2_VM_HOLSTER = 864,
    ITEM_2_VM_IDLE = 865,
    ITEM_2_VM_PULLBACK = 866,
    ITEM_2_VM_PRIMARYATTACK = 867,
    ITEM_2_VM_SECONDARYATTACK = 868,
    ITEM_2_VM_RELOAD = 869,
    ITEM_2_VM_DRYFIRE = 870,
    ITEM_2_VM_IDLE_TO_LOWERED = 871,
    ITEM_2_VM_IDLE_LOWERED = 872,
    ITEM_2_VM_LOWERED_TO_IDLE = 873,
    RELOAD_SUCCEED = 874,
    RELOAD_FAIL = 875,
    WALK_AIM_AUTOGUN = 876,
    RUN_AIM_AUTOGUN = 877,
    IDLE_AUTOGUN = 878,
    IDLE_AIM_AUTOGUN = 879,
    RELOAD_AUTOGUN = 880,
    CROUCH_IDLE_AUTOGUN = 881,
    RANGE_ATTACK_AUTOGUN = 882,
    JUMP_AUTOGUN = 883,
    IDLE_AIM_PISTOL = 884,
    WALK_AIM_DUAL = 885,
    RUN_AIM_DUAL = 886,
    IDLE_DUAL = 887,
    IDLE_AIM_DUAL = 888,
    RELOAD_DUAL = 889,
    CROUCH_IDLE_DUAL = 890,
    RANGE_ATTACK_DUAL = 891,
    JUMP_DUAL = 892,
    IDLE_AIM_SHOTGUN = 893,
    CROUCH_IDLE_SHOTGUN = 894,
    IDLE_AIM_RIFLE = 895,
    CROUCH_IDLE_RIFLE = 896,
    RANGE_ATTACK_RIFLE = 897,
    SLEEP = 898,
    WAKE = 899,
    FLICK_LEFT = 900,
    FLICK_LEFT_MIDDLE = 901,
    FLICK_RIGHT_MIDDLE = 902,
    FLICK_RIGHT = 903,
    SPINAROUND = 904,
    PREP_TO_FIRE = 905,
    FIRE = 906,
    FIRE_RECOVER = 907,
    SPRAY = 908,
    PREP_EXPLODE = 909,
    EXPLODE = 910,
    SCRIPT_CUSTOM_0 = 911,
    SCRIPT_CUSTOM_1 = 912,
    SCRIPT_CUSTOM_2 = 913,
    SCRIPT_CUSTOM_3 = 914,
    SCRIPT_CUSTOM_4 = 915,
    SCRIPT_CUSTOM_5 = 916,
    SCRIPT_CUSTOM_6 = 917,
    SCRIPT_CUSTOM_7 = 918,
    SCRIPT_CUSTOM_8 = 919,
    SCRIPT_CUSTOM_9 = 920,
    SCRIPT_CUSTOM_10 = 921,
    SCRIPT_CUSTOM_11 = 922,
    SCRIPT_CUSTOM_12 = 923,
    SCRIPT_CUSTOM_13 = 924,
    SCRIPT_CUSTOM_14 = 925,
    SCRIPT_CUSTOM_15 = 926,
    SCRIPT_CUSTOM_16 = 927,
    SCRIPT_CUSTOM_17 = 928,
    SCRIPT_CUSTOM_18 = 929,
    SCRIPT_CUSTOM_19 = 930,
    SCRIPT_CUSTOM_20 = 931,
    SCRIPT_CUSTOM_21 = 932,
    SCRIPT_CUSTOM_22 = 933,
    SCRIPT_CUSTOM_23 = 934,
    SCRIPT_CUSTOM_24 = 935,
    SCRIPT_CUSTOM_25 = 936,
    SCRIPT_CUSTOM_26 = 937,
    SCRIPT_CUSTOM_27 = 938,
    SCRIPT_CUSTOM_28 = 939,
    SCRIPT_CUSTOM_29 = 940,
    SCRIPT_CUSTOM_30 = 941,
    SCRIPT_CUSTOM_31 = 942,
    VR_PISTOL_LAST_SHOT = 943,
    VR_PISTOL_SLIDE_RELEASE = 944,
    VR_PISTOL_CLIP_OUT_CHAMBERED = 945,
    VR_PISTOL_CLIP_OUT_SLIDE_BACK = 946,
    VR_PISTOL_CLIP_IN_CHAMBERED = 947,
    VR_PISTOL_CLIP_IN_SLIDE_BACK = 948,
    VR_PISTOL_IDLE_SLIDE_BACK = 949,
    VR_PISTOL_IDLE_SLIDE_BACK_CLIP_READY = 950,
    RAGDOLL_RECOVERY_FRONT = 951,
    RAGDOLL_RECOVERY_BACK = 952,
    RAGDOLL_RECOVERY_LEFT = 953,
    RAGDOLL_RECOVERY_RIGHT = 954,
    GRABBITYGLOVES_GRAB = 955,
    GRABBITYGLOVES_RELEASE = 956,
    GRABBITYGLOVES_GRAB_IDLE = 957,
    GRABBITYGLOVES_ACTIVE = 958,
    GRABBITYGLOVES_ACTIVE_IDLE = 959,
    GRABBITYGLOVES_DEACTIVATE = 960,
    GRABBITYGLOVES_PULL = 961,
    HEADCRAB_SMOKE_BOMB = 962,
    HEADCRAB_SPIT = 963,
    ZOMBIE_TRIP = 964,
    ZOMBIE_LUNGE = 965,
    NEUTRAL_REF_POSE = 966,
    ANTLION_SCUTTLE_FORWARD = 967,
    ANTLION_SCUTTLE_BACK = 968,
    ANTLION_SCUTTLE_LEFT = 969,
    ANTLION_SCUTTLE_RIGHT = 970,
    VR_PISTOL_EMPTY_CLIP_IN_SLIDE_BACK = 971,
    VR_SHOTGUN_IDLE = 972,
    VR_SHOTGUN_OPEN_CHAMBER = 973,
    VR_SHOTGUN_RELOAD_1 = 974,
    VR_SHOTGUN_RELOAD_2 = 975,
    VR_SHOTGUN_RELOAD_3 = 976,
    VR_SHOTGUN_CLOSE_CHAMBER = 977,
    VR_SHOTGUN_TRIGGER_SQUEEZE = 978,
    VR_SHOTGUN_SHOOT = 979,
    VR_SHOTGUN_SLIDE_BACK = 980,
    VR_SHOTGUN_SLIDE_FORWARD = 981,
    VR_PISTOL_LONG_CLIP_IN_CHAMBERED = 982,
    VR_PISTOL_LONG_CLIP_IN_SLIDE_BACK = 983,
    VR_PISTOL_BURST_TOGGLE = 984,
    VR_PISTOL_LOW_KICK = 985,
    VR_PISTOL_BURST_ATTACK = 986,
    VR_SHOTGUN_GRENADE_TWIST = 987,
    DIE_STAND = 988,
    DIE_STAND_HEADSHOT = 989,
    DIE_CROUCH = 990,
    DIE_CROUCH_HEADSHOT = 991,
    CSGO_NULL = 992,
    CSGO_DEFUSE = 993,
    CSGO_DEFUSE_WITH_KIT = 994,
    CSGO_FLASHBANG_REACTION = 995,
    CSGO_FIRE_PRIMARY = 996,
    CSGO_FIRE_PRIMARY_OPT_1 = 997,
    CSGO_FIRE_PRIMARY_OPT_2 = 998,
    CSGO_FIRE_SECONDARY = 999,
    CSGO_FIRE_SECONDARY_OPT_1 = 1000,
    CSGO_FIRE_SECONDARY_OPT_2 = 1001,
    CSGO_RELOAD = 1002,
    CSGO_RELOAD_START = 1003,
    CSGO_RELOAD_LOOP = 1004,
    CSGO_RELOAD_END = 1005,
    CSGO_OPERATE = 1006,
    CSGO_DEPLOY = 1007,
    CSGO_CATCH = 1008,
    CSGO_SILENCER_DETACH = 1009,
    CSGO_SILENCER_ATTACH = 1010,
    CSGO_TWITCH = 1011,
    CSGO_TWITCH_BUYZONE = 1012,
    CSGO_PLANT_BOMB = 1013,
    CSGO_IDLE_TURN_BALANCEADJUST = 1014,
    CSGO_IDLE_ADJUST_STOPPEDMOVING = 1015,
    CSGO_ALIVE_LOOP = 1016,
    CSGO_FLINCH = 1017,
    CSGO_FLINCH_HEAD = 1018,
    CSGO_FLINCH_MOLOTOV = 1019,
    CSGO_JUMP = 1020,
    CSGO_FALL = 1021,
    CSGO_CLIMB_LADDER = 1022,
    CSGO_LAND_LIGHT = 1023,
    CSGO_LAND_HEAVY = 1024,
    CSGO_EXIT_LADDER_TOP = 1025,
    CSGO_EXIT_LADDER_BOTTOM = 1026,
    CSGO_PARACHUTE = 1027,
    CSGO_TAUNT = 1028,
    DOTA_IDLE = 1500,
    DOTA_IDLE_RARE = 1501,
    DOTA_RUN = 1502,
    DOTA_ATTACK = 1503,
    DOTA_ATTACK_2 = 1504,
    DOTA_ATTACK_EVENT = 1505,
    DOTA_DIE = 1506,
    DOTA_FLINCH = 1507,
    DOTA_FLAIL = 1508,
    DOTA_DISABLED = 1509,
    DOTA_CAST_ABILITY_1 = 1510,
    DOTA_CAST_ABILITY_2 = 1511,
    DOTA_CAST_ABILITY_3 = 1512,
    DOTA_CAST_ABILITY_4 = 1513,
    DOTA_CAST_ABILITY_5 = 1514,
    DOTA_CAST_ABILITY_6 = 1515,
    DOTA_OVERRIDE_ABILITY_1 = 1516,
    DOTA_OVERRIDE_ABILITY_2 = 1517,
    DOTA_OVERRIDE_ABILITY_3 = 1518,
    DOTA_OVERRIDE_ABILITY_4 = 1519,
    DOTA_CHANNEL_ABILITY_1 = 1520,
    DOTA_CHANNEL_ABILITY_2 = 1521,
    DOTA_CHANNEL_ABILITY_3 = 1522,
    DOTA_CHANNEL_ABILITY_4 = 1523,
    DOTA_CHANNEL_ABILITY_5 = 1524,
    DOTA_CHANNEL_ABILITY_6 = 1525,
    DOTA_CHANNEL_END_ABILITY_1 = 1526,
    DOTA_CHANNEL_END_ABILITY_2 = 1527,
    DOTA_CHANNEL_END_ABILITY_3 = 1528,
    DOTA_CHANNEL_END_ABILITY_4 = 1529,
    DOTA_CHANNEL_END_ABILITY_5 = 1530,
    DOTA_CHANNEL_END_ABILITY_6 = 1531,
    DOTA_CONSTANT_LAYER = 1532,
    DOTA_CAPTURE = 1533,
    DOTA_SPAWN = 1534,
    DOTA_KILLTAUNT = 1535,
    DOTA_TAUNT = 1536,
    DOTA_THIRST = 1537,
    DOTA_CAST_DRAGONBREATH = 1538,
    DOTA_ECHO_SLAM = 1539,
    DOTA_CAST_ABILITY_1_END = 1540,
    DOTA_CAST_ABILITY_2_END = 1541,
    DOTA_CAST_ABILITY_3_END = 1542,
    DOTA_CAST_ABILITY_4_END = 1543,
    MIRANA_LEAP_END = 1544,
    WAVEFORM_START = 1545,
    WAVEFORM_END = 1546,
    DOTA_CAST_ABILITY_ROT = 1547,
    DOTA_DIE_SPECIAL = 1548,
    DOTA_RATTLETRAP_BATTERYASSAULT = 1549,
    DOTA_RATTLETRAP_POWERCOGS = 1550,
    DOTA_RATTLETRAP_HOOKSHOT_START = 1551,
    DOTA_RATTLETRAP_HOOKSHOT_LOOP = 1552,
    DOTA_RATTLETRAP_HOOKSHOT_END = 1553,
    STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE = 1554,
    DOTA_TINKER_REARM_1 = 1555,
    DOTA_TINKER_REARM_2 = 1556,
    DOTA_TINKER_REARM_3 = 1557,
    TINY_AVALANCHE = 1558,
    TINY_TOSS = 1559,
    TINY_GROWL = 1560,
    DOTA_WEAVERBUG_ATTACH = 1561,
    DOTA_CAST_WILD_AXES_END = 1562,
    DOTA_CAST_LIFE_BREAK_START = 1563,
    DOTA_CAST_LIFE_BREAK_END = 1564,
    DOTA_NIGHTSTALKER_TRANSITION = 1565,
    DOTA_LIFESTEALER_RAGE = 1566,
    DOTA_LIFESTEALER_OPEN_WOUNDS = 1567,
    DOTA_SAND_KING_BURROW_IN = 1568,
    DOTA_SAND_KING_BURROW_OUT = 1569,
    DOTA_EARTHSHAKER_TOTEM_ATTACK = 1570,
    DOTA_WHEEL_LAYER = 1571,
    DOTA_ALCHEMIST_CHEMICAL_RAGE_START = 1572,
    DOTA_ALCHEMIST_CONCOCTION = 1573,
    DOTA_JAKIRO_LIQUIDFIRE_START = 1574,
    DOTA_JAKIRO_LIQUIDFIRE_LOOP = 1575,
    DOTA_LIFESTEALER_INFEST = 1576,
    DOTA_LIFESTEALER_INFEST_END = 1577,
    DOTA_LASSO_LOOP = 1578,
    DOTA_ALCHEMIST_CONCOCTION_THROW = 1579,
    DOTA_ALCHEMIST_CHEMICAL_RAGE_END = 1580,
    DOTA_CAST_COLD_SNAP = 1581,
    DOTA_CAST_GHOST_WALK = 1582,
    DOTA_CAST_TORNADO = 1583,
    DOTA_CAST_EMP = 1584,
    DOTA_CAST_ALACRITY = 1585,
    DOTA_CAST_CHAOS_METEOR = 1586,
    DOTA_CAST_SUN_STRIKE = 1587,
    DOTA_CAST_FORGE_SPIRIT = 1588,
    DOTA_CAST_ICE_WALL = 1589,
    DOTA_CAST_DEAFENING_BLAST = 1590,
    DOTA_VICTORY = 1591,
    DOTA_DEFEAT = 1592,
    DOTA_SPIRIT_BREAKER_CHARGE_POSE = 1593,
    DOTA_SPIRIT_BREAKER_CHARGE_END = 1594,
    DOTA_TELEPORT = 1595,
    DOTA_TELEPORT_END = 1596,
    DOTA_CAST_REFRACTION = 1597,
    DOTA_CAST_ABILITY_7 = 1598,
    DOTA_CANCEL_SIREN_SONG = 1599,
    DOTA_CHANNEL_ABILITY_7 = 1600,
    DOTA_LOADOUT = 1601,
    DOTA_FORCESTAFF_END = 1602,
    DOTA_POOF_END = 1603,
    DOTA_SLARK_POUNCE = 1604,
    DOTA_MAGNUS_SKEWER_START = 1605,
    DOTA_MAGNUS_SKEWER_END = 1606,
    DOTA_MEDUSA_STONE_GAZE = 1607,
    DOTA_RELAX_START = 1608,
    DOTA_RELAX_LOOP = 1609,
    DOTA_RELAX_END = 1610,
    DOTA_CENTAUR_STAMPEDE = 1611,
    DOTA_BELLYACHE_START = 1612,
    DOTA_BELLYACHE_LOOP = 1613,
    DOTA_BELLYACHE_END = 1614,
    DOTA_ROQUELAIRE_LAND = 1615,
    DOTA_ROQUELAIRE_LAND_IDLE = 1616,
    DOTA_GREEVIL_CAST = 1617,
    DOTA_GREEVIL_OVERRIDE_ABILITY = 1618,
    DOTA_GREEVIL_HOOK_START = 1619,
    DOTA_GREEVIL_HOOK_END = 1620,
    DOTA_GREEVIL_BLINK_BONE = 1621,
    DOTA_IDLE_SLEEPING = 1622,
    DOTA_INTRO = 1623,
    DOTA_GESTURE_POINT = 1624,
    DOTA_GESTURE_ACCENT = 1625,
    DOTA_SLEEPING_END = 1626,
    DOTA_AMBUSH = 1627,
    DOTA_ITEM_LOOK = 1628,
    DOTA_STARTLE = 1629,
    DOTA_FRUSTRATION = 1630,
    DOTA_TELEPORT_REACT = 1631,
    DOTA_TELEPORT_END_REACT = 1632,
    DOTA_SHRUG = 1633,
    DOTA_RELAX_LOOP_END = 1634,
    DOTA_PRESENT_ITEM = 1635,
    DOTA_IDLE_IMPATIENT = 1636,
    DOTA_SHARPEN_WEAPON = 1637,
    DOTA_SHARPEN_WEAPON_OUT = 1638,
    DOTA_IDLE_SLEEPING_END = 1639,
    DOTA_BRIDGE_DESTROY = 1640,
    DOTA_TAUNT_SNIPER = 1641,
    DOTA_DEATH_BY_SNIPER = 1642,
    DOTA_LOOK_AROUND = 1643,
    DOTA_CAGED_CREEP_RAGE = 1644,
    DOTA_CAGED_CREEP_RAGE_OUT = 1645,
    DOTA_CAGED_CREEP_SMASH = 1646,
    DOTA_CAGED_CREEP_SMASH_OUT = 1647,
    DOTA_IDLE_IMPATIENT_SWORD_TAP = 1648,
    DOTA_INTRO_LOOP = 1649,
    DOTA_BRIDGE_THREAT = 1650,
    DOTA_DAGON = 1651,
    DOTA_CAST_ABILITY_2_ES_ROLL_START = 1652,
    DOTA_CAST_ABILITY_2_ES_ROLL = 1653,
    DOTA_CAST_ABILITY_2_ES_ROLL_END = 1654,
    DOTA_NIAN_PIN_START = 1655,
    DOTA_NIAN_PIN_LOOP = 1656,
    DOTA_NIAN_PIN_END = 1657,
    DOTA_LEAP_STUN = 1658,
    DOTA_LEAP_SWIPE = 1659,
    DOTA_NIAN_INTRO_LEAP = 1660,
    DOTA_AREA_DENY = 1661,
    DOTA_NIAN_PIN_TO_STUN = 1662,
    DOTA_RAZE_1 = 1663,
    DOTA_RAZE_2 = 1664,
    DOTA_RAZE_3 = 1665,
    DOTA_UNDYING_DECAY = 1666,
    DOTA_UNDYING_SOUL_RIP = 1667,
    DOTA_UNDYING_TOMBSTONE = 1668,
    DOTA_WHIRLING_AXES_RANGED = 1669,
    DOTA_SHALLOW_GRAVE = 1670,
    DOTA_COLD_FEET = 1671,
    DOTA_ICE_VORTEX = 1672,
    DOTA_CHILLING_TOUCH = 1673,
    DOTA_ENFEEBLE = 1674,
    DOTA_FATAL_BONDS = 1675,
    DOTA_MIDNIGHT_PULSE = 1676,
    DOTA_ANCESTRAL_SPIRIT = 1677,
    DOTA_THUNDER_STRIKE = 1678,
    DOTA_KINETIC_FIELD = 1679,
    DOTA_STATIC_STORM = 1680,
    DOTA_MINI_TAUNT = 1681,
    DOTA_ARCTIC_BURN_END = 1682,
    DOTA_LOADOUT_RARE = 1683,
    DOTA_SWIM = 1684,
    DOTA_FLEE = 1685,
    DOTA_TROT = 1686,
    DOTA_SHAKE = 1687,
    DOTA_SWIM_IDLE = 1688,
    DOTA_WAIT_IDLE = 1689,
    DOTA_GREET = 1690,
    DOTA_TELEPORT_COOP_START = 1691,
    DOTA_TELEPORT_COOP_WAIT = 1692,
    DOTA_TELEPORT_COOP_END = 1693,
    DOTA_TELEPORT_COOP_EXIT = 1694,
    DOTA_SHOPKEEPER_PET_INTERACT = 1695,
    DOTA_ITEM_PICKUP = 1696,
    DOTA_ITEM_DROP = 1697,
    DOTA_CAPTURE_PET = 1698,
    DOTA_PET_WARD_OBSERVER = 1699,
    DOTA_PET_WARD_SENTRY = 1700,
    DOTA_PET_LEVEL = 1701,
    DOTA_CAST_BURROW_END = 1702,
    DOTA_LIFESTEALER_ASSIMILATE = 1703,
    DOTA_LIFESTEALER_EJECT = 1704,
    DOTA_ATTACK_EVENT_BASH = 1705,
    DOTA_CAPTURE_RARE = 1706,
    DOTA_AW_MAGNETIC_FIELD = 1707,
    DOTA_CAST_GHOST_SHIP = 1708,
    DOTA_FXANIM = 1709,
    DOTA_VICTORY_START = 1710,
    DOTA_DEFEAT_START = 1711,
    DOTA_DP_SPIRIT_SIPHON = 1712,
    DOTA_TRICKS_END = 1713,
    DOTA_ES_STONE_CALLER = 1714,
    DOTA_MK_STRIKE = 1715,
    DOTA_VERSUS = 1716,
    DOTA_CAPTURE_CARD = 1717,
    DOTA_MK_SPRING_SOAR = 1718,
    DOTA_MK_SPRING_END = 1719,
    DOTA_MK_TREE_SOAR = 1720,
    DOTA_MK_TREE_END = 1721,
    DOTA_MK_FUR_ARMY = 1722,
    DOTA_MK_SPRING_CAST = 1723,
    DOTA_NECRO_GHOST_SHROUD = 1724,
    DOTA_OVERRIDE_ARCANA = 1725,
    DOTA_SLIDE = 1726,
    DOTA_SLIDE_LOOP = 1727,
    DOTA_GENERIC_CHANNEL_1 = 1728,
    DOTA_GS_SOUL_CHAIN = 1729,
    DOTA_GS_INK_CREATURE = 1730,
    DOTA_TRANSITION = 1731,
    DOTA_BLINK_DAGGER = 1732,
    DOTA_BLINK_DAGGER_END = 1733,
    DOTA_CUSTOM_TOWER_ATTACK = 1734,
    DOTA_CUSTOM_TOWER_IDLE = 1735,
    DOTA_CUSTOM_TOWER_DIE = 1736,
    DOTA_CAST_COLD_SNAP_ORB = 1737,
    DOTA_CAST_GHOST_WALK_ORB = 1738,
    DOTA_CAST_TORNADO_ORB = 1739,
    DOTA_CAST_EMP_ORB = 1740,
    DOTA_CAST_ALACRITY_ORB = 1741,
    DOTA_CAST_CHAOS_METEOR_ORB = 1742,
    DOTA_CAST_SUN_STRIKE_ORB = 1743,
    DOTA_CAST_FORGE_SPIRIT_ORB = 1744,
    DOTA_CAST_ICE_WALL_ORB = 1745,
    DOTA_CAST_DEAFENING_BLAST_ORB = 1746,
    DOTA_NOTICE = 1747,
    DOTA_CAST_ABILITY_2_ALLY = 1748,
    DOTA_SHUFFLE_L = 1749,
    DOTA_SHUFFLE_R = 1750,
    DOTA_OVERRIDE_LOADOUT = 1751,
    DOTA_TAUNT_SPECIAL = 1752,
    DOTA_TELEPORT_START = 1753,
    DOTA_GENERIC_CHANNEL_1_START = 1754,
    DOTA_CUSTOM_TOWER_IDLE_RARE = 1755,
    DOTA_CUSTOM_TOWER_TAUNT = 1756,
    DOTA_CUSTOM_TOWER_HIGH_FIVE = 1757,
    DOTA_ATTACK_SPECIAL = 1758,
    DOTA_TRANSITION_IDLE = 1759,
    DOTA_PIERCE_THE_VEIL = 1760,
    DOTA_RUN_RARE = 1761,
    DOTA_VIPER_DIVE = 1762,
    DOTA_VIPER_DIVE_END = 1763,
    DOTA_MK_STRIKE_END = 1764,
    DOTA_SHADOW_VAULT = 1765,
    DOTA_KEZ_KATANA_ULT_START = 1766,
    DOTA_KEZ_KATANA_ULT_CHAIN_A = 1767,
    DOTA_KEZ_KATANA_ULT_CHAIN_B = 1768,
    DOTA_KEZ_KATANA_ULT_END = 1769,
    DOTA_KEZ_KATANA_IMPALE = 1770,
    DOTA_KEZ_KATANA_IMPALE_FAST = 1771,
    DOTA_UNICYCLE = 1772,
    DOTA_UNICYCLE_END = 1773,
    DOTA_LARGO_ULT_STRUM_SUCCESS = 1774,
    DOTA_LARGO_ULT_STRUM_FAIL = 1775,
    DOTA_MVP_SCREEN = 1776,
    DOTA_LARGO_ULT_TOGGLE_ON = 1777,
    DOTA_LARGO_ULT_TOGGLE_OFF = 1778,
    DOTA_RUN_STATUE = 1779,
    DOTA_CAST_1_STATUE = 1780,
    DOTA_CAST_2_STATUE = 1781,
    DOTA_STUN_STATUE = 1782,
    DOTA_FLAIL_STATUE = 1783,
    DOTA_SPAWN_STATUE = 1784,
    DOTA_TELEPORT_END_STATUE = 1785,
    DOTA_ATTACK_STATUE = 1786,
    DOTA_FORCESTAFF_STATUE = 1787,
    DOTA_TELEPORT_STATUE = 1788,
    DOTA_VICTORY_STATUE = 1789,
    DOTA_TAUNT_STATUE = 1790,
    DOTA_IDLE_STATUE = 1791,
    DOTA_DISABLED_END = 1792,
    DOTA_VOODOO_REST = 1793,
    DOTA_CYCLONE = 1794,
    DOTA_IMPALE = 1795,
    DOTA_TORRENT = 1796,
    DOTA_RADIANT_CREEP_HAMMER = 1798,
    DOTA_RELAX_IN = 1799,
    DOTA_RELAX_OUT = 1800,
    DOTA_CAST_FENCE = 1801,
    DOTA_SPWN = 1802,
    DOTA_CAST_3_STATUE = 1803,
    DOTA_CAST_4_STATUE = 1804,
    DOTA_CAST_5_STATUE = 1805,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type LuaModifierType = LuaModifierMotionType;

declare const enum LuaModifierMotionType {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
    INVALID = 4,
}

declare const MODIFIER_FUNCTION_LAST: 399;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierfunction = ModifierFunction;

declare const enum ModifierFunction {
    /**
     * 定值额外攻击力/目标额外攻击力（例：支配死灵/盛宴）
     */ PREATTACK_BONUS_DAMAGE = 0,
    /**
     * 目标触发额外攻击力（例：摔跤行家）
     */
    PREATTACK_BONUS_DAMAGE_TARGET = 1,
    /**
     * Lua不可用：触发额外攻击力（例：射手天赋）
     */
    PREATTACK_BONUS_DAMAGE_PROC = 2,
    /**
     * 后致命一击伤害（例：影刃）
     */
    PREATTACK_BONUS_DAMAGE_POST_CRIT = 3,
    /**
     * 定值基础攻击力（例：长大）
     */
    BASEATTACK_BONUSDAMAGE = 4,
    /**
     * 物理攻击特效（例：怒意狂击）
     */
    PROCATTACK_BONUS_DAMAGE_PHYSICAL = 5,
    /**
     * Lua不可用：物理魔法转化攻击特效（例：超自然）
     */
    PROCATTACK_CONVERT_PHYSICAL_TO_MAGICAL = 6,
    /**
     * 魔法攻击特效（例：金箍棒）
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL = 7,
    /**
     * 纯粹攻击特效（例：魔晶血怒）
     */
    PROCATTACK_BONUS_DAMAGE_PURE = 8,
    /**
     * Lua不可用：目标魔法攻击特效（例：丝质重器）
     */
    PROCATTACK_BONUS_DAMAGE_MAGICAL_TARGET = 9,
    /**
     * 魔法反馈攻击特效（例：法力损毁）
     */
    PROCATTACK_FEEDBACK = 10,
    /**
     * 总攻击设定（例：虚张声势）
     */
    OVERRIDE_ATTACK_DAMAGE = 11,
    /**
     * 攻击前监听记录攻击行为（例：射手天赋）
     */
    PRE_ATTACK = 12,
    /**
     * 隐身透明度（例：暗影步）
     */
    INVISIBILITY_LEVEL = 13,
    /**
     * 攻击不打破隐身（例：暗影之舞）
     */
    INVISIBILITY_ATTACK_BEHAVIOR_EXCEPTION = 14,
    /**
     * 永久隐身（例：刀光谍影）
     */
    PERSISTENT_INVISIBILITY = 15,
    /**
     * 定值额外移速（例：血肉傀儡）
     */
    MOVESPEED_BONUS_CONSTANT = 16,
    /**
     * 基础移速覆盖（例：妖术）
     */
    MOVESPEED_BASE_OVERRIDE = 17,
    /**
     * 标准移速下限设定（未知）
     */
    MOVESPEED_MIN_OVERRIDE = 18,
    /**
     * 标准移速上限设定（例：举步生风）
     */
    MOVESPEED_MAX_OVERRIDE = 19,
    /**
     * 百分比额外移速（例：黄泉颤抖）
     */
    MOVESPEED_BONUS_PERCENTAGE = 20,
    /**
     * 特殊百分比额外移速（例：夜叉）
     */
    MOVESPEED_BONUS_PERCENTAGE_UNIQUE = 21,
    /**
     * 特殊定值额外移速（例：速度之靴）
     */
    MOVESPEED_BONUS_UNIQUE = 22,
    /**
     * 特殊定值额外移速2（未知）
     */
    MOVESPEED_BONUS_UNIQUE_2 = 23,
    /**
     * 唯一特殊定值额外移速（未知）
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE = 24,
    /**
     * 唯一特殊定值额外移速2（例：风灵之纹）
     */
    MOVESPEED_BONUS_CONSTANT_UNIQUE_2 = 25,
    /**
     * 移速设定（例：时间结界）
     */
    MOVESPEED_ABSOLUTE = 26,
    /**
     * 绝对移速下限设定（例：奔腾）
     */
    MOVESPEED_ABSOLUTE_MIN = 27,
    /**
     * 绝对移速上限设定（例：重如铁锚）
     */
    MOVESPEED_ABSOLUTE_MAX = 28,
    /**
     * 突破标准移速上限（例：焦渴）
     */
    IGNORE_MOVESPEED_LIMIT = 29,
    /**
     * 绝对移速上限（例：蜥蜴绝吻）
     */
    MOVESPEED_LIMIT = 30,
    /**
     * 攻击速度设定（未知）
     */
    ATTACKSPEED_BASE_OVERRIDE = 31,
    /**
     * 固定攻击间隔（例：怒拳破）
     */
    FIXED_ATTACK_RATE = 32,
    /**
     * 定值攻击速度（例：超强力量）
     */
    ATTACKSPEED_BONUS_CONSTANT = 33,
    /**
     * 突破攻速限制（例：战斗专注）
     */
    IGNORE_ATTACKSPEED_LIMIT = 34,
    /**
     * 定值冷却时间降低（未知）
     */
    COOLDOWN_REDUCTION_CONSTANT = 35,
    /**
     * 定值魔法消耗降低（未知）
     */
    MANACOST_REDUCTION_CONSTANT = 36,
    /**
     * Lua不可用：定值生命消耗降低（例：德尊血式）
     */
    HEALTHCOST_REDUCTION_CONSTANT = 37,
    /**
     * 基础攻击间隔设定（例：化学狂暴）
     */
    BASE_ATTACK_TIME_CONSTANT = 38,
    /**
     * Lua不可用：定值基础攻击间隔调整（例：神杖虚妄之诺）
     */
    BASE_ATTACK_TIME_CONSTANT_ADJUST = 39,
    /**
     * Lua不可用：百分比基础攻击间隔（例：中立附魔粗暴）
     */
    BASE_ATTACK_TIME_PERCENTAGE = 40,
    /**
     * 基础攻击前摇设定（例：严寒烧灼）
     */
    ATTACK_POINT_CONSTANT = 41,
    /**
     * Lua不可用：额外攻击百分比调整（例：灵幻兵械）
     */
    BONUSDAMAGEOUTGOING_PERCENTAGE = 42,
    /**
     * 百分比总攻击力（例：虚弱）
     */
    DAMAGEOUTGOING_PERCENTAGE = 43,
    /**
     * 幻象攻击伤害调整（例：幻象默认）
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION = 44,
    /**
     * Lua不可用：幻象特殊攻击伤害调整（例：幻象对建筑肉山）
     */
    DAMAGEOUTGOING_PERCENTAGE_ILLUSION_AMPLIFY = 45,
    /**
     * 施加方通用伤害调整（例：决斗达人）
     */
    TOTALDAMAGEOUTGOING_PERCENTAGE = 46,
    /**
     * 技能增强（例：血怒）
     */
    SPELL_AMPLIFY_PERCENTAGE = 47,
    /**
     * 特殊技能增强（例：慧光）
     */
    SPELL_AMPLIFY_PERCENTAGE_UNIQUE = 48,
    /**
     * Lua不可用：目标技能增强（未知）
     */
    SPELL_AMPLIFY_PERCENTAGE_TARGET = 49,
    /**
     * 施加方治疗调整（例：圣洁吊坠）
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE = 50,
    /**
     * 承受方治疗调整（例：薄葬）
     */
    HEAL_AMPLIFY_PERCENTAGE_TARGET = 51,
    /**
     * 生命恢复调整（例：淬毒武器）
     */
    HP_REGEN_AMPLIFY_PERCENTAGE = 52,
    /**
     * 攻击吸血调整（例：散华）
     */
    LIFESTEAL_AMPLIFY_PERCENTAGE = 53,
    /**
     * 技能吸血调整（例：霜冷光环）
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE = 54,
    /**
     * 特殊技能吸血调整（例：慧光）
     */
    SPELL_LIFESTEAL_AMPLIFY_PERCENTAGE_UNIQUE = 55,
    /**
     * 魔法恢复调整（例：幽魂护罩）
     */
    MP_REGEN_AMPLIFY_PERCENTAGE = 56,
    /**
     * 特殊魔法恢复调整（例：慧光）
     */
    MP_REGEN_AMPLIFY_PERCENTAGE_UNIQUE = 57,
    /**
     * Lua不可用：魔法消耗增强（未知）
     */
    MANA_DRAIN_AMPLIFY_PERCENTAGE = 58,
    /**
     * 魔法获取调整（例：幽魂护罩）
     */
    MP_RESTORE_AMPLIFY_PERCENTAGE = 59,
    /**
     * 百分比基础额外攻击力（例：复仇光环）
     */
    BASEDAMAGEOUTGOING_PERCENTAGE = 60,
    /**
     * 特殊百分比基础额外攻击力（未知）
     */
    BASEDAMAGEOUTGOING_PERCENTAGE_UNIQUE = 61,
    /**
     * 承受方通用伤害调整（例：激怒）
     */
    INCOMING_DAMAGE_PERCENTAGE = 62,
    /**
     * 承受方特殊物理伤害调整（例：石化凝视）
     */
    INCOMING_PHYSICAL_DAMAGE_PERCENTAGE = 63,
    /**
     * 物理伤害护盾（例：共鸣脉冲）
     */
    INCOMING_PHYSICAL_DAMAGE_CONSTANT = 64,
    /**
     * 魔法伤害护盾（例：烈火罩）
     */
    INCOMING_SPELL_DAMAGE_CONSTANT = 65,
    /**
     * 闪避（例：魅影无形）
     */
    EVASION_CONSTANT = 66,
    /**
     * 负值闪避（未知）
     */
    NEGATIVE_EVASION_CONSTANT = 67,
    /**
     * 特殊状态抗性（例：散夜对剑）
     */
    STATUS_RESISTANCE = 68,
    /**
     * 状态抗性（例：威吓）
     */
    STATUS_RESISTANCE_STACKING = 69,
    /**
     * 负面状态增强（例：技能窃取）
     */
    STATUS_RESISTANCE_CASTER = 70,
    /**
     * 首端伤害无效化（例：回光返照）
     */
    AVOID_DAMAGE = 71,
    /**
     * 技能吸收（未知）
     */
    AVOID_SPELL = 72,
    /**
     * 致盲（例：旋风飞斧）
     */
    MISS_PERCENTAGE = 73,
    /**
     * 百分比基础护甲（例：自然秩序）
     */
    PHYSICAL_ARMOR_BASE_PERCENTAGE = 74,
    /**
     * Lua不可用：百分比总护甲调整（未知）
     */
    PHYSICAL_ARMOR_TOTAL_PERCENTAGE = 75,
    /**
     * 定值额外护甲（例：战吼）
     */
    PHYSICAL_ARMOR_BONUS = 76,
    /**
     * 特殊定值额外护甲（例：天鹰之戒）
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE = 77,
    /**
     * 特殊主动定值额外护甲（例：玄冥盾牌）
     */
    PHYSICAL_ARMOR_BONUS_UNIQUE_ACTIVE = 78,
    /**
     * Lua不可用：后结算定值护甲（例：灵魂链接）
     */
    PHYSICAL_ARMOR_BONUS_POST = 79,
    /**
     * Lua不可用：最低护甲设定（例：刚强巨盾）
     */
    MIN_PHYSICAL_ARMOR = 80,
    /**
     * 忽略物理护甲（例：一剑穿心）
     */
    IGNORE_PHYSICAL_ARMOR = 81,
    /**
     * Lua不可用：基础魔法抗性降低（例：自然秩序）
     */
    MAGICAL_RESISTANCE_BASE_REDUCTION = 82,
    /**
     * 线性魔法抗性（未知）
     */
    MAGICAL_RESISTANCE_DIRECT_MODIFICATION = 83,
    /**
     * 额外魔法抗性（例：法术反制）
     */
    MAGICAL_RESISTANCE_BONUS = 84,
    /**
     * Lua不可用：幻象魔法抗性（例：暗绘）
     */
    MAGICAL_RESISTANCE_BONUS_ILLUSIONS = 85,
    /**
     * Lua不可用：特殊魔法抗性（未知）
     */
    MAGICAL_RESISTANCE_BONUS_UNIQUE = 86,
    /**
     * 虚无魔法抗性（例：衰老）
     */
    MAGICAL_RESISTANCE_DECREPIFY_UNIQUE = 87,
    /**
     * 基础魔法恢复无效化（未知）
     */
    BASE_MANA_REGEN = 88,
    /**
     * 定值魔法恢复（例：奥术光环）
     */
    MANA_REGEN_CONSTANT = 89,
    /**
     * 特殊定值魔法恢复（例：天鹰之戒）
     */
    MANA_REGEN_CONSTANT_UNIQUE = 90,
    /**
     * 百分比最大魔法恢复（例：泉水回春）
     */
    MANA_REGEN_TOTAL_PERCENTAGE = 91,
    /**
     * 定值生命恢复（例：活性护甲）
     */
    HEALTH_REGEN_CONSTANT = 92,
    /**
     * 百分比最大生命恢复（例：泉水回春）
     */
    HEALTH_REGEN_PERCENTAGE = 93,
    /**
     * 特殊百分比生命恢复（例：恐鳌之心）
     */
    HEALTH_REGEN_PERCENTAGE_UNIQUE = 94,
    /**
     * 定值最大生命值（例：活力之球）
     */
    HEALTH_BONUS = 95,
    /**
     * 定值最大魔法值（例：能量之球）
     */
    MANA_BONUS = 96,
    /**
     * 特殊定值额外力量（例：腐朽）
     */
    EXTRA_STRENGTH_BONUS = 97,
    /**
     * 特殊定值最大生命值（例：感染）
     */
    EXTRA_HEALTH_BONUS = 98,
    /**
     * 特殊定值最大魔法值（例：灵魂之戒）
     */
    EXTRA_MANA_BONUS = 99,
    /**
     * Lua不可用：百分比额外最大魔法值（未知）
     */
    EXTRA_MANA_BONUS_PERCENTAGE = 100,
    /**
     * 百分比最大生命值（例：磐石光环）
     */
    EXTRA_HEALTH_PERCENTAGE = 101,
    /**
     * 百分比最大魔法值（例：空灵挂件）
     */
    EXTRA_MANA_PERCENTAGE = 102,
    /**
     * 定值额外力量（例：食人魔之斧）
     */
    STATS_STRENGTH_BONUS = 103,
    /**
     * 定值额外敏捷（例：欢欣之刃）
     */
    STATS_AGILITY_BONUS = 104,
    /**
     * 定值额外智力（例：魔力法杖）
     */
    STATS_INTELLECT_BONUS = 105,
    /**
     * Lua不可用：百分比总力量（例：血肉傀儡）
     */
    STATS_STRENGTH_BONUS_PERCENTAGE = 106,
    /**
     * Lua不可用：百分比总敏捷（例：射手天赋）
     */
    STATS_AGILITY_BONUS_PERCENTAGE = 107,
    /**
     * Lua不可用：百分比总智力（例：通灵头带）
     */
    STATS_INTELLECT_BONUS_PERCENTAGE = 108,
    /**
     * Method Name: `GetModifierIntellectNone`
     */
    STATS_INTELLECT_NONE = 109,
    /**
     * 特殊定值施法距离（例：以太透镜）
     */
    CAST_RANGE_BONUS = 110,
    /**
     * Lua不可用：百分比施法距离（例：折跃耀光）
     */
    CAST_RANGE_BONUS_PERCENTAGE = 111,
    /**
     * 目标额外施法距离（未知）
     */
    CAST_RANGE_BONUS_TARGET = 112,
    /**
     * 定值施法距离（例：奥术至尊）
     */
    CAST_RANGE_BONUS_STACKING = 113,
    /**
     * 固有攻击距离设定（例：变形）
     */
    ATTACK_RANGE_BASE_OVERRIDE = 114,
    /**
     * 定值攻击距离（例：瞄准）
     */
    ATTACK_RANGE_BONUS = 115,
    /**
     * 特殊定值攻击距离（例：魔龙枪）
     */
    ATTACK_RANGE_BONUS_UNIQUE = 116,
    /**
     * 百分比攻击距离（例：折跃耀光）
     */
    ATTACK_RANGE_BONUS_PERCENTAGE = 117,
    /**
     * 绝对攻击距离设定（例：变身）
     */
    MAX_ATTACK_RANGE = 118,
    /**
     * 定值弹道速度（例：严寒烧灼）
     */
    PROJECTILE_SPEED_BONUS = 119,
    /**
     * Lua不可用：百分比弹道速度（例：银闪护符）
     */
    PROJECTILE_SPEED_BONUS_PERCENTAGE = 120,
    /**
     * 弹道特效替换（例：魔化）
     */
    PROJECTILE_NAME = 121,
    /**
     * 重生（例：绝冥再生）
     */
    REINCARNATION = 122,
    /**
     * 关闭重生特效（未知）
     */
    REINCARNATION_SUPPRESS_FX = 123,
    /**
     * 特殊定值复活时间（例：吸血灵魂）
     */
    RESPAWNTIME = 124,
    /**
     * 百分比复活时间降低（例：吸血灵魂）
     */
    RESPAWNTIME_PERCENTAGE = 125,
    /**
     * 定值复活时间（未知）
     */
    RESPAWNTIME_STACKING = 126,
    /**
     * 百分比冷却缩减（例：玲珑心）
     */
    COOLDOWN_PERCENTAGE = 127,
    /**
     * Lua不可用：冷却速度调整（例：时间膨胀）
     */
    COOLDOWN_PERCENTAGE_ONGOING = 128,
    /**
     * 施法动作降低（例：逆转时空）
     */
    CASTTIME_PERCENTAGE = 129,
    /**
     * Lua不可用：百分比攻击动作（例：海象神拳！）
     */
    ATTACK_ANIM_TIME_PERCENTAGE = 130,
    /**
     * 特殊百分比魔法消耗降低（例：散慧对剑）
     */
    MANACOST_PERCENTAGE = 131,
    /**
     * 百分比魔法消耗降低（例：奥术符）
     */
    MANACOST_PERCENTAGE_STACKING = 132,
    /**
     * 特殊百分比生命消耗降低（未知）
     */
    HEALTHCOST_PERCENTAGE = 133,
    /**
     * 百分比生命消耗降低（未知）
     */
    HEALTHCOST_PERCENTAGE_STACKING = 134,
    /**
     * 定值死亡损失金钱（未知）
     */
    DEATHGOLDCOST = 135,
    /**
     * 百分比死亡损失金钱（例：海盗帽）
     */
    PERCENTAGE_DEATHGOLDCOST = 136,
    /**
     * 经验倍率调整（例：从众心理）
     */
    EXP_RATE_BOOST = 137,
    /**
     * 金钱倍率调整（未知）
     */
    GOLD_RATE_BOOST = 138,
    /**
     * Method Name: `GetModifierPercentageKillAssistGoldBoost`
     */
    KILL_ASSIST_GOLD_BOOST = 139,
    /**
     * Lua不可用：百分比经验金钱转化（未知）
     */
    CONVERT_EXP_TO_GOLD_PCT = 140,
    /**
     * 致命一击（例：混沌一击）
     */
    PREATTACK_CRITICALSTRIKE = 141,
    /**
     * 目标致命一击（例：翔影之钗）
     */
    PREATTACK_TARGET_CRITICALSTRIKE = 142,
    /**
     * 魔法伤害格挡（例：凝魂之露）
     */
    MAGICAL_CONSTANT_BLOCK = 143,
    /**
     * 物理伤害格挡（例：海妖外壳）
     */
    PHYSICAL_CONSTANT_BLOCK = 144,
    /**
     * 特殊物理伤害格挡（未知）
     */
    PHYSICAL_CONSTANT_BLOCK_SPECIAL = 145,
    /**
     * Method Name: `GetModifierPhysical_ConstantBlockBonus`
     */
    PHYSICAL_CONSTANT_BLOCK_BONUS = 146,
    /**
     * Lua不可用：近战物理伤害格挡概率覆盖（例：刚毅）
     */
    INNATE_DAMAGE_BLOCK_PCT_OVERRIDE = 147,
    /**
     * 前端伤害格挡（例：魔法盾）
     */
    TOTAL_CONSTANT_BLOCK_UNAVOIDABLE_PRE_ARMOR = 148,
    /**
     * 末端伤害格挡（例：肉盾）
     */
    TOTAL_CONSTANT_BLOCK = 149,
    /**
     * 完整动画覆盖（例：太多了）
     */
    OVERRIDE_ANIMATION = 150,
    /**
     * 动画速率调整（例：太多了）
     */
    OVERRIDE_ANIMATION_RATE = 151,
    /**
     * 技能抵挡（例：林肯法球）
     */
    ABSORB_SPELL = 152,
    /**
     * 技能反弹（例：清莲宝珠）
     */
    REFLECT_SPELL = 153,
    /**
     * 禁止自动攻击（例：相位转移）
     */
    DISABLE_AUTOATTACK = 154,
    /**
     * 定值白天视野（例：辰星破晓）
     */
    BONUS_DAY_VISION = 155,
    /**
     * 百分比白天视野（例：邪道私语）
     */
    BONUS_DAY_VISION_PERCENTAGE = 156,
    /**
     * 定值夜晚视野（例：月之祝福）
     */
    BONUS_NIGHT_VISION = 157,
    /**
     * 特殊定值夜晚视野（例：银月之晶）
     */
    BONUS_NIGHT_VISION_UNIQUE = 158,
    /**
     * 百分比日夜视野（例：老版荒芜）
     */
    BONUS_VISION_PERCENTAGE = 159,
    /**
     * 绝对白天视野上限设定（例：丛林之舞）
     */
    FIXED_DAY_VISION = 160,
    /**
     * 绝对夜晚视野上限设定（例：丛林之舞）
     */
    FIXED_NIGHT_VISION = 161,
    /**
     * 最低生命值设定（例：薄葬）
     */
    MIN_HEALTH = 162,
    /**
     * 最低魔法值设定（例：特别储备）
     */
    MIN_MANA = 163,
    /**
     * 物理伤害无效化（例：守护天使）
     */
    ABSOLUTE_NO_DAMAGE_PHYSICAL = 164,
    /**
     * 魔法伤害无效化（例：命运敕令）
     */
    ABSOLUTE_NO_DAMAGE_MAGICAL = 165,
    /**
     * 纯粹伤害无效化（例：防御符文）
     */
    ABSOLUTE_NO_DAMAGE_PURE = 166,
    /**
     * 幻象标识（例：幻象默认）
     */
    IS_ILLUSION = 167,
    /**
     * 幻象标签（例：幻象默认）
     */
    ILLUSION_LABEL = 168,
    /**
     * Lua不可用：强幻象标签（例：复仇光环）
     */
    STRONG_ILLUSION = 169,
    /**
     * Lua不可用：可施法幻象标签（例：复仇光环）
     */
    SUPER_ILLUSION = 170,
    /**
     * 终极技能可施法幻象标签（例：复仇光环）
     */
    SUPER_ILLUSION_WITH_ULTIMATE = 171,
    /**
     * Lua不可用：死亡可获得经验（例：复仇光环）
     */
    XP_DURING_DEATH = 172,
    /**
     * 百分比转身速率（例：粘性燃油）
     */
    TURN_RATE_PERCENTAGE = 173,
    /**
     * 转身速率覆盖（例：相位鞋）
     */
    TURN_RATE_OVERRIDE = 174,
    /**
     * 生命冻结（例：冰晶爆轰）
     */
    DISABLE_HEALING = 175,
    /**
     * Lua不可用：魔法获取无效化（例：神杖闪烁）
     */
    DISABLE_MANA_GAIN = 176,
    /**
     * 无视攻击距离（例：飓风长戟）
     */
    ALWAYS_ALLOW_ATTACK = 177,
    /**
     * Lua不可用：可攻击虚无单位（例：超自然）
     */
    ALWAYS_ETHEREAL_ATTACK = 178,
    /**
     * 无视攻击免疫（例：超自然）
     */
    OVERRIDE_ATTACK_MAGICAL = 179,
    /**
     * 即时刷新统计情况（例：奥术符）
     */
    UNIT_STATS_NEEDS_REFRESH = 180,
    /**
     * 百分比小兵击杀金钱（未知）
     */
    BOUNTY_CREEP_MULTIPLIER = 181,
    /**
     * 百分比其他单位击杀金钱（未知）
     */
    BOUNTY_OTHER_MULTIPLIER = 182,
    /**
     * Lua不可用：禁止单位升级（未知）
     */
    UNIT_DISALLOW_UPGRADING = 183,
    /**
     * 持续躲避（例：老版扫射）
     */
    DODGE_PROJECTILE = 184,
    /**
     * Lua不可用：仅触发攻击动作特效（未知）
     */
    TRIGGER_COSMETIC_AND_END_ATTACK = 185,
    /**
     * 百分比属性攻击力（未知）
     */
    PRIMARY_STAT_DAMAGE_MULTIPLIER = 186,
    /**
     * Lua不可用：致死打击（未知）
     */
    PREATTACK_DEADLY_BLOW = 187,
    /**
     * Lua不可用：固守原位仍自动攻击（未知）
     */
    ALWAYS_AUTOATTACK_WHILE_HOLD_POSITION = 188,
    /**
     * Lua不可用：百分比物理抗性穿透（例：地狱之裂）
     */
    PHYSICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 189,
    /**
     * Lua不可用：百分比魔法抗性穿透（未知）
     */
    MAGICAL_ARMOR_PIERCING_PERCENTAGE_TARGET = 190,
    /**
     * Lua不可用：致命一击倍率增加（未知）
     */
    CRITICAL_STRIKE_BONUS = 191,
    /**
     * Lua不可用：物理纯粹转化攻击特效（未知）
     */
    CONVERT_ATTACK_PHYSICAL_TO_PURE = 192,
    /**
     * Lua不可用：增益时间增强（例：安可）
     */
    BUFF_AMPLIFICATION = 193,
    /**
     * 选定施法目标时（例：老版灵匣）
     */
    ON_SPELL_TARGET_READY = 194,
    /**
     * 记录攻击时（例：神枪在手）
     */
    ON_ATTACK_RECORD = 195,
    /**
     * 开始攻击抬手时（例：不可侵犯）
     */
    ON_ATTACK_START = 196,
    /**
     * 攻击发出时（例：暗影之境）
     */
    ON_ATTACK = 197,
    /**
     * 攻击命中时（例：腐蚀兵械）
     */
    ON_ATTACK_LANDED = 198,
    /**
     * 攻击失败时（例：液态火）
     */
    ON_ATTACK_FAIL = 199,
    /**
     * 攻击友方时（未知）
     */
    ON_ATTACK_ALLIED = 200,
    /**
     * 弹道被躲避时（例：顽皮克敌）
     */
    ON_PROJECTILE_DODGE = 201,
    /**
     * 下达指令时（例：相位转移）
     */
    ON_ORDER = 202,
    /**
     * Lua不可用：收到指令时（未知）
     */
    ON_ORDER_RECEIVED = 203,
    /**
     * 单位移动时（例：隐匿）
     */
    ON_UNIT_MOVED = 204,
    /**
     * 开始施法时（未知）
     */
    ON_ABILITY_START = 205,
    /**
     * 施法完成时（例：余震）
     */
    ON_ABILITY_EXECUTED = 206,
    /**
     * 完全施放时（例：奥术积累）
     */
    ON_ABILITY_FULLY_CAST = 207,
    /**
     * 打破隐身时（例：影刃）
     */
    ON_BREAK_INVISIBILITY = 208,
    /**
     * 持续施法结束时（例：遗言）
     */
    ON_ABILITY_END_CHANNEL = 209,
    /**
     * Lua不可用：升级时（未知）
     */
    ON_PROCESS_UPGRADE = 210,
    /**
     * Lua不可用：刷新时（未知）
     */
    ON_REFRESH = 211,
    /**
     * 受到伤害时（例：腐蚀皮肤）
     */
    ON_TAKEDAMAGE = 212,
    /**
     * 阻止死亡时（例：禽戏）
     */
    ON_DEATH_PREVENTED = 213,
    /**
     * 状态改变时（例：幽魂护罩）
     */
    ON_STATE_CHANGED = 214,
    /**
     * Lua不可用：触发法球效果时（未知）
     */
    ON_ORB_EFFECT = 215,
    /**
     * 产生攻击分裂时（例：巨力挥舞）
     */
    ON_PROCESS_CLEAVE = 216,
    /**
     * 造成伤害时（例：幽魂之剑）
     */
    ON_DAMAGE_CALCULATED = 217,
    /**
     * 造成技能伤害时（例：束手束脚）
     */
    ON_MAGIC_DAMAGE_CALCULATED = 218,
    /**
     * 攻击结束时（例：并列）
     */
    ON_ATTACKED = 219,
    /**
     * 单位死亡时（例：衰退光环）
     */
    ON_DEATH = 220,
    /**
     * 完全死亡时（例：临别一枪）
     */
    ON_DEATH_COMPLETED = 221,
    /**
     * 单位复活时（例：下地狱再上来）
     */
    ON_RESPAWN = 222,
    /**
     * 消耗魔法时（例：幽冥守卫）
     */
    ON_SPENT_MANA = 223,
    /**
     * 消耗生命时（未知）
     */
    ON_SPENT_HEALTH = 224,
    /**
     * Method Name: `OnSpentItemCharge`
     */
    ON_SPENT_ITEM_CHARGE = 225,
    /**
     * 正在传送时（例：剑刃风暴）
     */
    ON_TELEPORTING = 226,
    /**
     * 传送结束时（例：降临）
     */
    ON_TELEPORTED = 227,
    /**
     * 设定单位位置时（例：扔出）
     */
    ON_SET_LOCATION = 228,
    /**
     * 获取生命时（未知）
     */
    ON_HEALTH_GAINED = 229,
    /**
     * 获取魔法时（例：羁绊）
     */
    ON_MANA_GAINED = 230,
    /**
     * 产生击杀归属时（例：死神镰刀）
     */
    ON_TAKEDAMAGE_KILLCREDIT = 231,
    /**
     * 击杀英雄时（例：血色外衣）
     */
    ON_HERO_KILLED = 232,
    /**
     * 获得治疗时（例：羁绊）
     */
    ON_HEAL_RECEIVED = 233,
    /**
     * Method Name: `OnRedirectHealthGain`
     */
    ON_REDIRECT_HEALTH_GAIN = 234,
    /**
     * 摧毁建筑时（例：毁灭之赏）
     */
    ON_BUILDING_KILLED = 235,
    /**
     * 模型替换时（例：古龙形态）
     */
    ON_MODEL_CHANGED = 236,
    /**
     * 施加modifier时（例：咤）
     */
    ON_MODIFIER_ADDED = 237,
    /**
     * Lua不可用：移除modifier时（例：神杖高射火炮）
     */
    ON_MODIFIER_REMOVED = 238,
    /**
     * Method Name: `OnScepterUpgradeSelected`
     */
    ON_SCEPTER_UPGRADE_SELECTED = 239,
    /**
     * Method Name: `OnShardUpgradeSelected`
     */
    ON_SHARD_UPGRADE_SELECTED = 240,
    /**
     * 技能数值说明（例：太多了）
     */
    TOOLTIP = 241,
    /**
     * 模型替换（例：真熊形态）
     */
    MODEL_CHANGE = 242,
    /**
     * 定值模型体积（例：腐朽）
     */
    MODEL_SCALE = 243,
    /**
     * 模型体积动画时间（未知）
     */
    MODEL_SCALE_ANIMATE_TIME = 244,
    /**
     * 模型体积缓入缓出动画（未知）
     */
    MODEL_SCALE_USE_IN_OUT_EASE = 245,
    /**
     * 模型体积覆盖（未知）
     */
    MODEL_SCALE_CONSTANT = 246,
    /**
     * 神杖升级（例：神杖）
     */
    IS_SCEPTER = 247,
    /**
     * Lua不可用：魔晶升级（例：魔晶）
     */
    IS_SHARD = 248,
    /**
     * Lua不可用：扫描冷却降低（例：望远镜）
     */
    RADAR_COOLDOWN_REDUCTION = 249,
    /**
     * 动画转变（例：太多了）
     */
    TRANSLATE_ACTIVITY_MODIFIERS = 250,
    /**
     * 攻击声音特效（例：太多了）
     */
    TRANSLATE_ATTACK_SOUND = 251,
    /**
     * 倒计时特效（例：普通召唤单位默认）
     */
    LIFETIME_FRACTION = 252,
    /**
     * 模型视野（例：风雷之击）
     */
    PROVIDES_FOW_POSITION = 253,
    /**
     * 施放技能消耗生命值（未知）
     */
    SPELLS_REQUIRE_HP = 254,
    /**
     * 通过生命值施放技能（例：血魔法）
     */
    CONVERT_MANA_COST_TO_HEALTH_COST = 255,
    /**
     * 强制小地图显示（未知）
     */
    FORCE_DRAW_MINIMAP = 256,
    /**
     * 朝向锁定（例：护身甲盾）
     */
    DISABLE_TURNING = 257,
    /**
     * 忽略施法角度（例：喷气背包）
     */
    IGNORE_CAST_ANGLE = 258,
    /**
     * 改变技能数值（未知）
     */
    CHANGE_ABILITY_VALUE = 259,
    /**
     * 覆盖技能数值（例：太多了）
     */
    OVERRIDE_ABILITY_SPECIAL = 260,
    /**
     * 特殊覆盖技能数值（例：太多了）
     */
    OVERRIDE_ABILITY_SPECIAL_VALUE = 261,
    /**
     * 技能排布隐藏（例：感染）
     */
    ABILITY_LAYOUT = 262,
    /**
     * 被支配时（例：感染）
     */
    ON_DOMINATED = 263,
    /**
     * Lua不可用：击杀时（未知）
     */
    ON_KILL = 264,
    /**
     * Lua不可用：助攻时（未知）
     */
    ON_ASSIST = 265,
    /**
     * 风暴双雄克隆体标签（例：风暴双雄）
     */
    TEMPEST_DOUBLE = 266,
    /**
     * 模型替换时粒子特效（例：暗夜猎影）
     */
    PRESERVE_PARTICLES_ON_MODEL_CHANGE = 267,
    /**
     * 攻击完成时（例：强化图腾）
     */
    ON_ATTACK_FINISHED = 268,
    /**
     * Lua不可用：忽略冷却（未知）
     */
    IGNORE_COOLDOWN = 269,
    /**
     * 可攻击树木（未知）
     */
    CAN_ATTACK_TREES = 270,
    /**
     * 设置飞行高度（例：丛林之舞）
     */
    VISUAL_Z_DELTA = 271,
    /**
     * 起飞速度覆盖（未知）
     */
    VISUAL_Z_SPEED_BASE_OVERRIDE = 272,
    /**
     * Lua不可用：幻象承受伤害调整（例：幻象默认）
     */
    INCOMING_DAMAGE_ILLUSION = 273,
    /**
     * 不使攻击目标暴露（未知）
     */
    DONT_GIVE_VISION_OF_ATTACKER = 274,
    /**
     * 状态栏即时更新说明（例：太多了）
     */
    TOOLTIP2 = 275,
    /**
     * 攻击记录摧毁时（例：奥术天球）
     */
    ON_ATTACK_RECORD_DESTROY = 276,
    /**
     * 弹道被摧毁时（例：热血竞技场）
     */
    ON_PROJECTILE_OBSTRUCTION_HIT = 277,
    /**
     * 跳过传送（未知）
     */
    SUPPRESS_TELEPORT = 278,
    /**
     * 攻击取消时（例：神枪在手）
     */
    ON_ATTACK_CANCELLED = 279,
    /**
     * Lua不可用：不触发攻击分裂（例：神之谴戒）
     */
    SUPPRESS_CLEAVE = 280,
    /**
     * Lua不可用：机器人额外分数（未知）
     */
    BOT_ATTACK_SCORE_BONUS = 281,
    /**
     * 百分比减攻速调整（未知）
     */
    ATTACKSPEED_REDUCTION_PERCENTAGE = 282,
    /**
     * 百分比减移速调整（未知）
     */
    MOVESPEED_REDUCTION_PERCENTAGE = 283,
    /**
     * Lua不可用：可在移动时攻击（例：集中火力）
     */
    ATTACK_WHILE_MOVING_TARGET = 284,
    /**
     * 百分比攻击速度（例：长大）
     */
    ATTACKSPEED_PERCENTAGE = 285,
    /**
     * Lua不可用：尝试躲避弹道时（未知）
     */
    ON_ATTEMPT_PROJECTILE_DODGE = 286,
    /**
     * 特殊百分比冷却缩减（未知）
     */
    COOLDOWN_PERCENTAGE_STACKING = 287,
    /**
     * Lua不可用：技能共享目标（例：位面空洞）
     */
    SPELL_REDIRECT_TARGET = 288,
    /**
     * Lua不可用：定值转身速率（例：织网）
     */
    TURN_RATE_CONSTANT = 289,
    /**
     * Lua不可用：中立物品栏可使用普通物品（例：囤积狂鼠）
     */
    PACK_RAT = 290,
    /**
     * Lua不可用：施加方百分比物理伤害（例：怨灵之契）
     */
    PHYSICALDAMAGEOUTGOING_PERCENTAGE = 291,
    /**
     * Lua不可用：击退抗性（例：坚固核心）
     */
    KNOCKBACK_AMPLIFICATION_PERCENTAGE = 292,
    /**
     * 特殊生命条（例：攻击次数型单位）
     */
    HEALTHBAR_PIPS = 293,
    /**
     * 全类型伤害护盾（例：无光之盾）
     */
    INCOMING_DAMAGE_CONSTANT = 294,
    /**
     * 施法成功时（例：绝刃）
     */
    SPELL_APPLIED_SUCCESSFULLY = 295,
    /**
     * 尾端伤害无效化（例：虚妄之诺）
     */
    AVOID_DAMAGE_AFTER_REDUCTIONS = 296,
    /**
     * Lua不可用：致使攻击失败（例：林渊旅人）
     */
    FAIL_ATTACK = 297,
    /**
     * Lua不可用：前结算伤害调整（未知）
     */
    PREREDUCE_INCOMING_DAMAGE_MULT = 298,
    /**
     * 跳过死亡特效（未知）
     */
    SUPPRESS_FULLSCREEN_DEATH_FX = 299,
    /**
     * Lua不可用：后结算伤害护盾（未知）
     */
    INCOMING_DAMAGE_CONSTANT_POST = 300,
    /**
     * Lua不可用：特殊百分比总攻击调整（例：窒碍短匕）
     */
    DAMAGEOUTGOING_PERCENTAGE_MULTIPLICATIVE = 301,
    /**
     * Lua不可用：被动金钱倍率（例：贤者石）
     */
    TICK_GOLD_MULTIPLIER = 302,
    /**
     * Lua不可用：特殊减速抗性（例：散华）
     */
    SLOW_RESISTANCE_UNIQUE = 303,
    /**
     * Lua不可用：减速抗性（例：神之力量）
     */
    SLOW_RESISTANCE_STACKING = 304,
    /**
     * Lua不可用：减速抗性影响攻速（例：不可逾越）
     */
    SLOW_RESISTANCE_APPLIES_TO_ATTACKS = 305,
    /**
     * Lua不可用：百分比作用范围加成（例：凶）
     */
    AOE_BONUS_PERCENTAGE = 306,
    /**
     * Lua不可用：区域百分比弹道速度（例：逆转时空）
     */
    PROJECTILE_SPEED = 307,
    /**
     * Lua不可用：区域百分比目标弹道速度（未知）
     */
    PROJECTILE_SPEED_TARGET = 308,
    /**
     * Lua不可用：变为力量（例：潮落）
     */
    BECOME_STRENGTH = 309,
    /**
     * Lua不可用：变为敏捷（例：潮涨）
     */
    BECOME_AGILITY = 310,
    /**
     * Lua不可用：变为智力（未知）
     */
    BECOME_INTELLIGENCE = 311,
    /**
     * Lua不可用：变为全才（例：老版冥界亚龙天赋）
     */
    BECOME_UNIVERSAL = 312,
    /**
     * Lua不可用：强制触发魔棒时（例：马蹄践踏）
     */
    ON_FORCE_PROC_MAGIC_STICK = 313,
    /**
     * 生命移除时（未知）
     */
    ON_DAMAGE_HPLOSS = 314,
    /**
     * 智慧神龛共享（例：古龙学者）
     */
    SHARE_XPRUNE = 315,
    /**
     * 智慧神龛冷却时间覆盖（未知）
     */
    XP_FOUNTAIN_COUNTDOWN_TIME_OVERRIDE = 316,
    /**
     * 死亡无回城卷轴（未知）
     */
    NO_FREE_TP_SCROLL_ON_DEATH = 317,
    /**
     * Lua不可用：额外中立物品选项（例：三只手）
     */
    HAS_BONUS_NEUTRAL_ITEM_CHOICE = 318,
    /**
     * Method Name: `HasBonusNeutralItemPassive`
     */
    HAS_BONUS_NEUTRAL_ITEM_PASSIVE = 319,
    /**
     * Lua不可用：中立附魔累加（例：斯布恩的藏品）
     */
    PRESERVE_NEUTRAL_ITEM_PASSIVES = 320,
    /**
     * Lua不可用：最大生命值设定（例：坚毅之件）
     */
    FORCE_MAX_HEALTH = 321,
    /**
     * Lua不可用：最大魔法值设定（例：血魔法）
     */
    FORCE_MAX_MANA = 322,
    /**
     * Lua不可用：特殊定值作用范围加成（例：缚灵索）
     */
    AOE_BONUS_CONSTANT = 323,
    /**
     * Lua不可用：定值作用范围加成（例：亵渎之力）
     */
    AOE_BONUS_CONSTANT_STACKING = 324,
    /**
     * Lua不可用：在首端伤害格挡前时（例：永世法衣）
     */
    ON_TAKEDAMAGE_POST_UNAVOIDABLE_BLOCK = 325,
    /**
     * Lua不可用：锁闭伤害技能时（例：闪烁匕首）
     */
    ON_MUTE_DAMAGE_ABILITIES = 326,
    /**
     * Lua不可用：不触发致命一击（例：老版英灵胸针）
     */
    SUPPRESS_CRIT = 327,
    /**
     * Lua不可用：提供技能点数（例：曲线学习）
     */
    ABILITY_POINTS = 328,
    /**
     * Lua不可用：百分比买活惩罚（例：恶魔的交易）
     */
    BUYBACK_PENALTY_PERCENT = 329,
    /**
     * Lua不可用：百分比出售价格增加（例：恶魔的交易）
     */
    ITEM_SELLBACK_COST = 330,
    /**
     * 可拆分任意物品（例：拆东补西）
     */
    DISASSEMBLE_ANYTHING = 331,
    /**
     * 固定魔法恢复（例：死亡充能）
     */
    FIXED_MANA_REGEN = 332,
    /**
     * Lua不可用：上下坡落空概率加成（例：制高点）
     */
    BONUS_UPHILL_MISS_CHANCE = 333,
    /**
     * Lua不可用：反补生命百分比调整（例：盛宴）
     */
    CREEP_DENY_PERCENT = 334,
    /**
     * 绝对攻速上限设定（未知）
     */
    ATTACKSPEED_ABSOLUTE_MAX = 335,
    /**
     * Lua不可用：更改视野阵营（例：热血运动）
     */
    FOW_TEAM = 336,
    /**
     * 开始死亡时（例：驱邪护符）
     */
    ON_HERO_BEGIN_DYING = 337,
    /**
     * Lua不可用：疗伤莲花效果增强（例：赛洛蒙妮的信徒）
     */
    BONUS_LOTUS_HEAL = 338,
    /**
     * Lua不可用：百分比力量生命恢复增强（例：内在优势）
     */
    BASE_HP_REGEN_PER_STR_BONUS_PERCENTAGE = 339,
    /**
     * Lua不可用：百分比敏捷护甲增强（例：内在优势）
     */
    BASE_ARMOR_PER_AGI_BONUS_PERCENTAGE = 340,
    /**
     * Method Name: `GetModifierBaseAttackSpeedPerAgiBonusPercentage`
     */
    BASE_ATTACKSPEED_PER_AGI_BONUS_PERCENTAGE = 341,
    /**
     * Lua不可用：百分比智力生命恢复增强（例：内在优势）
     */
    BASE_MP_REGEN_PER_INT_BONUS_PERCENTAGE = 342,
    /**
     * Lua不可用：百分比智力魔法抗性增强（例：内在优势）
     */
    BASE_MRES_PER_INT_BONUS_PERCENTAGE = 343,
    /**
     * 进入白天时（例：辰星破晓）
     */
    ON_DAY_STARTED = 344,
    /**
     * Lua不可用：进入夜晚时（例：固有增益）
     */
    ON_NIGHT_STARTED = 345,
    /**
     * 额外幻象产生概率（例：混沌称霸）
     */
    CREATE_BONUS_ILLUSION_CHANCE = 346,
    /**
     * 额外幻象产生数量（例：混沌称霸）
     */
    CREATE_BONUS_ILLUSION_COUNT = 347,
    /**
     * Lua不可用：伪随机概率减低（例：天佑勇者）
     */
    PSEUDORANDOM_BONUS = 348,
    /**
     * 攻击弹道交互高度增加（例：冰川）
     */
    ATTACK_HEIGHT_BONUS = 349,
    /**
     * Lua不可用：跳过攻击结算（例：死亡守卫）
     */
    SKIP_ATTACK_REGULATOR = 350,
    /**
     * Lua不可用：目标致盲（例：老版烟幕）
     */
    MISS_PERCENTAGE_TARGET = 351,
    /**
     * 额外掉落中立物品（例：丛林赠品）
     */
    ADDITIONAL_NEUTRAL_ITEM_DROPS = 352,
    /**
     * 额外百分比终结连杀金钱（例：职业猎人）
     */
    KILL_STREAK_BONUS_GOLD_PERCENTAGE = 353,
    /**
     * Lua不可用：生命恢复系数（例：无畏）
     */
    HP_REGEN_MULTIPLIER_PRE_AMPLIFICATION = 354,
    /**
     * Lua不可用：命石覆盖（例：变形）
     */
    HEROFACET_OVERRIDE = 355,
    /**
     * 摧毁树木时（例：暴露疗法）
     */
    ON_TREE_CUT_DOWN = 356,
    /**
     * Lua不可用：攻击分裂命中时（例：死亡之拳）
     */
    ON_CLEAVE_ATTACK_LANDED = 357,
    /**
     * Lua不可用：最低属性等级（例：虚空行者）
     */
    MIN_ATTRIBUTE_LEVEL = 358,
    /**
     * Lua不可用：中立物品复制（例：英熊好礼）
     */
    TIER_TOKEN_REROLL = 359,
    /**
     * Lua不可用：视野角度限制（例：红光满面）
     */
    VISION_DEGREES_RESTRICTION = 360,
    /**
     * Lua不可用：叠加末端伤害格挡（例：幽灵船）
     */
    TOTAL_CONSTANT_BLOCK_STACKING = 361,
    /**
     * Lua不可用：物品栏限制（例：熊亦求精）
     */
    INVENTORY_SLOT_RESTRICTED = 362,
    /**
     * Lua不可用：同步中立物品时（例：英熊好礼）
     */
    ON_TIER_TOKEN_REROLLED = 363,
    /**
     * 技能转向/拦截（例：缚魂、位面空洞）。Lua：GetRedirectSpell(event?)=>0|1，return 1 挡原目标；无法靠返回值指定新目标
     */
    REDIRECT_SPELL = 364,
    /**
     * Lua不可用：活跃基础攻击力（例：灵幻兵械）
     */
    BASEATTACK_POSTBONUS = 365,
    /**
     * Lua不可用：视野所属阵营改变时（例：真实视域）
     */
    ON_FOW_TEAM_CHANGED = 366,
    /**
     * Lua不可用：跳过攻击触发（未知）
     */
    SUPPRESS_ATTACK_PROCS = 367,
    /**
     * Lua不可用：切换开关技能时（例：熊亦求精）
     */
    ON_ABILITY_TOGGLED = 368,
    /**
     * Lua不可用：不触发攻击特效（例：翔影之钗）
     */
    AVOID_ATTACK_PROCS = 369,
    /**
     * Lua不可用：神符产生时（未知）
     */
    ON_RUNE_SPAWN = 370,
    /**
     * Lua不可用：攻击吸血（例：撒旦之邪力）
     */
    PHYSICAL_LIFESTEAL = 371,
    /**
     * Lua不可用：技能吸血（例：血精石）
     */
    MAGICAL_LIFESTEAL = 372,
    /**
     * Lua不可用：造成纯粹伤害时（例：束手束脚）
     */
    ON_PURE_DAMAGE_CALCULATED = 373,
    /**
     * Lua不可用：提前打造中立物品（例：基本法则锻造）
     */
    NEUTRAL_TRINKET_OPTIONS = 374,
    /**
     * Lua不可用：选择中立附魔时（未知）
     */
    NEUTRAL_ENHANCEMENT_OPTIONS = 375,
    /**
     * 定值标准移速上限（例：奔流湍急）
     */
    MOVESPEED_MAX_BONUS_CONSTANT = 376,
    /**
     * 后移速调整定值移速（例：奔流湍急）
     */
    MOVESPEED_POST_MULTIPLIER_BONUS_CONSTANT = 377,
    /**
     * Lua不可用：禁止产生幻象（未知）
     */
    FORBID_ILLUSIONS = 378,
    /**
     * Lua不可用：魔法消耗覆盖（未知）
     */
    MANACOST_OVERRIDE = 379,
    /**
     * Lua不可用：生命回复调整（例：斯嘉蒂之眼）
     */
    RESTORATION_AMPLIFICATION = 380,
    /**
     * Lua不可用：特殊生命回复调整（例：散华）
     */
    RESTORATION_AMPLIFICATION_UNIQUE = 381,
    /**
     * Lua不可用：特殊施加方治疗调整（未知）
     */
    HEAL_AMPLIFY_PERCENTAGE_SOURCE_UNIQUE = 382,
    /**
     * Method Name: `GetModifierPropertyRedirectHealthGain`
     */
    REDIRECT_HEALTH_GAIN = 383,
    /**
     * Lua不可用：跳过承受方致命一击（未知）
     */
    SUPPRESS_INCOMING_CRIT = 384,
    /**
     * Lua不可用：中立物品升级（例：休眠珍品）
     */
    UPGRADE_NEUTRAL_ARTIFACTS = 385,
    /**
     * Lua不可用：忽略无效攻击移动指令（未知）
     */
    SUPPRESS_INVALID_MOVE_ATTACK_ORDERS = 386,
    /**
     * Lua不可用：消耗品加速（例：源泉）
     */
    CONSUMABLE_USE_SPEED = 387,
    /**
     * Lua不可用：首次学习等级调整（例：曲线学习）
     */
    REQUIRED_LEVEL = 388,
    /**
     * Lua不可用：刷新modifier时（例：安可）
     */
    ON_MODIFIER_REFRESHED = 389,
    /**
     * Lua不可用：交换技能时（例：两栖狂想曲）
     */
    ON_ABILITY_SWAPPED = 390,
    /**
     * Lua不可用：小兵击杀金钱覆盖（例：加重骰子）
     */
    OVERRIDE_CREEP_BOUNTY = 391,
    /**
     * Lua不可用：基础攻击力覆盖（例：加重骰子）
     */
    OVERRIDE_BASE_DAMAGE = 392,
    /**
     * Method Name: `GetModifierOverrideUntargetableFrom`
     */
    UNTARGETABLE_FROM = 393,
    /**
     * Method Name: `GetModifierOverrideUntargetableTo`
     */
    UNTARGETABLE_TO = 394,
    /**
     * Method Name: `GetModifierSuperIllusionWithItems`
     */
    SUPER_ILLUSION_WITH_ITEMS = 395,
    /**
     * Method Name: `OnPurged`
     */
    ON_PURGE = 396,
    /**
     * Method Name: `OnIllusionCreated`
     */
    ON_ILLUSION_CREATED = 397,
    /**
     * Method Name: `GetModifierHeroLevelScale`
     */
    HEROLEVELSCALE = 398,
    INVALID = 65535,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierpriority = ModifierPriority;

declare const enum ModifierPriority {
    /**
     * 低优先级（默认）
     */ LOW = 0,
    /**
     * 中优先级（例：黑洞）
     */
    NORMAL = 1,
    /**
     * 高优先级（例：燃烧枷锁）
     */
    HIGH = 2,
    /**
     * 极高优先级（例：海象飞踢）
     */
    ULTRA = 3,
    /**
     * 最高优先级（例：捶）
     */
    SUPER_ULTRA = 4,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierremove = ModifierRemove;

declare const enum ModifierRemove {
    ALL = 0,
    ENEMY = 1,
    ALLY = 2,
}

/**
 * 终止占位（默认）
 */
declare const MODIFIER_STATE_LAST: 64;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type modifierstate = ModifierState;

declare const enum ModifierState {
    /**
     * 缠绕（例：疯狂生长）
     */ ROOTED = 0,
    /**
     * 缴械（例：超震声波）
     */
    DISARMED = 1,
    /**
     * 攻击免疫（例：幽魂权杖）
     */
    ATTACK_IMMUNE = 2,
    /**
     * 沉默（例：全领域静默）
     */
    SILENCED = 3,
    /**
     * 锁闭（例：神杖静态风暴）
     */
    MUTED = 4,
    /**
     * 眩晕（例：魔法箭）
     */
    STUNNED = 5,
    /**
     * 妖术（例：邪恶镰刀）
     */
    HEXED = 6,
    /**
     * 隐身（例：暗影步）
     */
    INVISIBLE = 7,
    /**
     * 无敌（例：海妖之歌）
     */
    INVULNERABLE = 8,
    /**
     * 技能免疫（例：技能免疫）
     */
    MAGIC_IMMUNE = 9,
    /**
     * 共享视野（例：静电连接）
     */
    PROVIDES_VISION = 10,
    /**
     * 睡眠（例：噩梦）
     */
    NIGHTMARED = 11,
    /**
     * 禁用物理伤害格挡（未知）
     */
    BLOCK_DISABLED = 12,
    /**
     * 禁用闪避（未知）
     */
    EVADE_DISABLED = 13,
    /**
     * 无法选中（例：无影拳）
     */
    UNSELECTABLE = 14,
    /**
     * 无法指定敌方目标（未知）
     */
    CANNOT_TARGET_ENEMIES = 15,
    /**
     * 无法指定建筑目标（例：越界）
     */
    CANNOT_TARGET_BUILDINGS = 16,
    /**
     * 克敌机先（例：复仇）
     */
    CANNOT_MISS = 17,
    /**
     * 可被反补（例：瘴气）
     */
    SPECIALLY_DENIABLE = 18,
    /**
     * 动作冻结（例：急速冷却）
     */
    FROZEN = 19,
    /**
     * 无法行动（例：巫毒变身术）
     */
    COMMAND_RESTRICTED = 20,
    /**
     * 隐藏小地图图标（例：虫群）
     */
    NOT_ON_MINIMAP = 21,
    /**
     * 低攻击优先级（例：七十二变）
     */
    LOW_ATTACK_PRIORITY = 22,
    /**
     * 隐藏单位生命条（例：信使护盾）
     */
    NO_HEALTH_BAR = 23,
    /**
     * 对敌隐藏单位生命条（例：魅影无形）
     */
    NO_HEALTH_BAR_FOR_ENEMIES = 24,
    /**
     * 对其他玩家隐藏生命条（例：虚无投影）
     */
    NO_HEALTH_BAR_FOR_OTHER_PLAYERS = 25,
    /**
     * 飞行（例：黑暗飞升）
     */
    FLYING = 26,
    /**
     * 相位状态（例：守卫冲刺）
     */
    NO_UNIT_COLLISION = 27,
    /**
     * 无法作为跟随目标（例：幻影之拥）
     */
    NO_TEAM_MOVE_TO = 28,
    /**
     * 选择组忽略置入（例：幻影之拥）
     */
    NO_TEAM_SELECT = 29,
    /**
     * 破坏（例：蝮蛇突袭）
     */
    PASSIVES_DISABLED = 30,
    /**
     * 被支配标记（例：支配头盔）
     */
    DOMINATED = 31,
    /**
     * 失去视野（例：诱敌奇术）
     */
    BLIND = 32,
    /**
     * 隐藏（例：崩裂禁锢）
     */
    OUT_OF_GAME = 33,
    /**
     * 虚拟友方（例：感染）
     */
    FAKE_ALLY = 34,
    /**
     * 无视地形状态（例：幽鬼之刃）
     */
    FLYING_FOR_PATHING_PURPOSES_ONLY = 35,
    /**
     * 真实视域免疫（例：暗影之舞）
     */
    TRUESIGHT_IMMUNE = 36,
    /**
     * 不取对象（例：便车）
     */
    UNTARGETABLE = 37,
    /**
     * 友方不取对象（例：魔晶烟幕）
     */
    UNTARGETABLE_ALLIED = 38,
    /**
     * 敌方不取对象（例：暗影之境）
     */
    UNTARGETABLE_ENEMY = 39,
    /**
     * 自身不取对象（未知）
     */
    UNTARGETABLE_SELF = 40,
    /**
     * 无法执行移动攻击（例：掘地）
     */
    IGNORING_MOVE_AND_ATTACK_ORDERS = 41,
    /**
     * 树木穿行（例：自然蔽护）
     */
    ALLOW_PATHING_THROUGH_TREES = 42,
    /**
     * 对敌隐藏小地图图标（例：魅影无形）
     */
    NOT_ON_MINIMAP_FOR_ENEMIES = 43,
    /**
     * 无视减速（例：弹无虚发）
     */
    UNSLOWABLE = 44,
    /**
     * 束缚（例：突袭）
     */
    TETHERED = 45,
    /**
     * 无法执行停止命令（例：星破天惊）
     */
    IGNORING_STOP_ORDERS = 46,
    /**
     * 恐惧（例：恐吓）
     */
    FEARED = 47,
    /**
     * 嘲讽（例：狂战士的怒吼）
     */
    TAUNTED = 48,
    /**
     * 强制位移免疫（例：捶）
     */
    CANNOT_BE_MOTION_CONTROLLED = 49,
    /**
     * 飞行视野（例：喷气背包）
     */
    FORCED_FLYING_VISION = 50,
    /**
     * 可攻击友方（未知）
     */
    ATTACK_ALLIES = 51,
    /**
     * 仅无视地形（未知）
     */
    ALLOW_PATHING_THROUGH_CLIFFS = 52,
    ALLOW_PATHING_THROUGH_POWER_COGS = 53,
    /**
     * 无法被反补（未知）
     */
    SPECIALLY_UNDENIABLE = 54,
    /**
     * 无视特殊地形（未知）
     */
    ALLOW_PATHING_THROUGH_OBSTRUCTIONS = 55,
    /**
     * 减益免疫（例：剑刃风暴）
     */
    DEBUFF_IMMUNE = 56,
    /**
     * 穿越守护者之门（例：守护者之门）
     */
    ALLOW_PATHING_THROUGH_BASE_BLOCKER = 57,
    /**
     * 无法执行移动命令（未知）
     */
    IGNORING_MOVE_ORDERS = 58,
    /**
     * 远程近战结算（例：灵魂打击）
     */
    ATTACKS_ARE_MELEE = 59,
    /**
     * 完全启动背包（例：老版斯布恩的藏品）
     */
    CAN_USE_BACKPACK_ITEMS = 60,
    /**
     * 持续施法期间施法（例：湮灭专家）
     */
    CASTS_IGNORE_CHANNELING = 61,
    /**
     * 攻击不曝露（例：吉利服）
     */
    ATTACKS_DONT_REVEAL = 62,
    /**
     * 无野怪仇恨（例：丛林之舞）
     */
    NEUTRALS_DONT_ATTACK = 63,
}

declare const MAX_PATTACH_TYPES: 16;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type ParticleAttachment_t = ParticleAttachment;

declare const enum ParticleAttachment {
    INVALID = -1,
    ABSORIGIN = 0,
    ABSORIGIN_FOLLOW = 1,
    CUSTOMORIGIN = 2,
    CUSTOMORIGIN_FOLLOW = 3,
    POINT = 4,
    POINT_FOLLOW = 5,
    EYES_FOLLOW = 6,
    OVERHEAD_FOLLOW = 7,
    WORLDORIGIN = 8,
    ROOTBONE_FOLLOW = 9,
    RENDERORIGIN_FOLLOW = 10,
    MAIN_VIEW = 11,
    WATERWAKE = 12,
    CENTER_FOLLOW = 13,
    CUSTOM_GAME_STATE_1 = 14,
    HEALTHBAR = 15,
}

declare const enum PseudoRandom {
    NONE = 0,
    MAGNUS_SHARD = 1,
    PHANTOMASSASSIN_CRIT = 2,
    PHANTOMASSASSIN_DAGGER = 3,
    PHANTOMLANCER_JUXTAPOSE = 4,
    TINY_CRAGGY = 5,
    COLD_REBUKE = 6,
    WOLF_CRIT = 7,
    AXE_HELIX = 8,
    AXE_HELIX_ATTACK = 9,
    LEGION_MOMENT = 10,
    SLARDAR_BASH = 11,
    OD_ESSENCE = 12,
    DROW_MARKSMANSHIP = 13,
    OGRE_MAGI_FIREBLAST = 14,
    OGRE_ITEM_MULTICAST = 15,
    SPIRITBREAKER_GREATERBASH = 16,
    LONE_DRUID_ENTANGLE = 17,
    FACELESS_BASH = 18,
    FACELESS_EVADE_SPELL = 19,
    FACELESS_EVADE_ATTACK = 20,
    FACELESS_VOID_BACKTRACK = 21,
    BREWMASTER_CRIT = 22,
    BREWMASTER_CINDER_BREW = 23,
    SNIPER_HEADSHOT = 24,
    ATOS = 25,
    JUGG_CRIT = 26,
    DAZZLE_SCEPTER = 27,
    CHAOS_CRIT = 28,
    LYCAN_CRIT = 29,
    TUSK_CRIT = 30,
    CM_FREEZING_FIELD = 31,
    GENERIC_BASHER = 32,
    SKELETONKING_CRIT = 33,
    SKELETONKING_CRIT_MORTAL = 34,
    ITEM_GREATERCRIT = 35,
    ITEM_LESSERCRIT = 36,
    ITEM_BASHER = 37,
    ITEM_SOLAR_CREST = 38,
    ITEM_JAVELIN_ACCURACY = 39,
    ITEM_TRIDENT = 40,
    ITEM_ABYSSAL = 41,
    ITEM_ABYSSAL_BLOCK = 42,
    ITEM_STOUT = 43,
    ITEM_VANGUARD = 44,
    ITEM_CRIMSON_GUARD = 45,
    ITEM_PMS = 46,
    ITEM_HALBRED_MAIM = 47,
    ITEM_SANGEYASHA_MAIM = 48,
    ITEM_SANGEKAYA_MAIM = 49,
    ITEM_SANGE_MAIM = 50,
    ITEM_BUTTERFLY = 51,
    ITEM_MAELSTROM = 52,
    ITEM_MJOLLNIR = 53,
    ITEM_MJOLLNIR_STATIC = 54,
    ITEM_MKB = 55,
    ITEM_SILVER_EDGE = 56,
    ITEM_NAGINATA = 57,
    TROLL_BASH = 58,
    RIKI_SMOKE_SCREEN = 59,
    CHAOS_DOUBLE_CRIT = 60,
    CHAOS_TRIPLE_CRIT = 61,
    GENERIC_EVASION = 62,
    GENERIC_HEIGHT_MISS = 63,
    GENERIC_MISS = 64,
    ARMADILLO_HEARTPIERCER = 65,
    MARS_SHIELD = 66,
    CHAOS_KNIGHT_INNATE_REFUND = 67,
    NEUTRAL_DROP_TIER_1 = 68,
    NEUTRAL_DROP_TIER_2 = 69,
    NEUTRAL_DROP_TIER_3 = 70,
    NEUTRAL_DROP_TIER_4 = 71,
    NEUTRAL_DROP_TIER_5 = 72,
    MARS_BULWARK = 73,
    MUERTA_GUNSLINGER = 74,
    TROLL_FERVOR_SHARD = 75,
    SNAPFIRE_GLANCING = 76,
    PANGOLIER_PARRY = 77,
    HOODWINK_REDIRECT = 78,
    KEZ_SAI = 79,
    CHAOS_KNIGHT_HAVOC = 80,
    LARGO_FROGSTOMP = 81,
    NAGA_RIPTIDE = 82,
    CUSTOM_GENERIC = 83,
    CUSTOM_GAME_1 = 84,
    CUSTOM_GAME_2 = 85,
    CUSTOM_GAME_3 = 86,
    CUSTOM_GAME_4 = 87,
    CUSTOM_GAME_5 = 88,
    CUSTOM_GAME_6 = 89,
    CUSTOM_GAME_7 = 90,
    CUSTOM_GAME_8 = 91,
    CUSTOM_GAME_9 = 92,
}

declare const QUEST_NUM_TEXT_REPLACE_VALUES: 4;

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type quest_text_replace_values_t = QuestTextReplaceValue;

declare const enum QuestTextReplaceValue {
    CURRENT_VALUE = 0,
    TARGET_VALUE = 1,
    ROUND = 2,
    REWARD = 3,
}

declare const enum ShowGenericPopupType {
    TINT_SCREEN = 1,
    SHOW_NO_OTHER_DIALOGS = 2,
}

/**
 *
 *
 * https://developer.valvesoftware.com/wiki/Animation_Events#Server_events
 */
declare const enum SourceEngineAnimationEvent {
    EMPTY = 0,
    CL_PLAYSOUND = 1,
    CL_PLAYSOUND_ATTACHMENT = 2,
    CL_PLAYSOUND_POSITION = 3,
    SV_PLAYSOUND = 4,
    CL_STOPSOUND = 5,
    CL_PLAYSOUND_LOOPING = 6,
    CL_CREATE_PARTICLE_EFFECT = 7,
    CL_STOP_PARTICLE_EFFECT = 8,
    CL_CREATE_PARTICLE_EFFECT_CFG = 9,
    SV_CREATE_PARTICLE_EFFECT_CFG = 10,
    SV_STOP_PARTICLE_EFFECT = 11,
    FOOTSTEP = 12,
    CL_STOP_RAGDOLL_CONTROL = 13,
    CL_ENABLE_BODYGROUP = 14,
    CL_DISABLE_BODYGROUP = 15,
    BODYGROUP_SET_VALUE = 16,
    WEAPON_PERFORM_ATTACK = 17,
    FIRE_INPUT = 18,
    CL_CLOTH_ATTR = 19,
    CL_CLOTH_GROUND_OFFSET = 20,
    CL_CLOTH_STIFFEN = 21,
    CL_CLOTH_EFFECT = 22,
    CL_CREATE_ANIM_SCOPE_PROP = 23,
    SV_IKLOCK = 24,
    PULSE_GRAPH = 25,
    DISABLE_PLATFORM = 26,
    ENABLE_PLATFORM_PLAYER_FOLLOWS_YAW = 27,
    ENABLE_PLATFORM_PLAYER_IGNORES_YAW = 28,
    DESTRUCTIBLE_PART_DESTROY = 29,
    CL_SUPPRESS_EVENTS_WITH_TAG = 30,
    CL_HIDE_PARTICLE_EFFECT = 31,
    CL_SHOW_PARTICLE_EFFECT = 32,
    CL_ADD_PARTICLE_EFFECT_CP = 33,
    CL_SPEECH = 34,
    CL_PANORAMA_EVENT = 35,
    CL_DOTA_PLAY_STATUS_EFFECT = 36,
    CL_DOTA_STOP_STATUS_EFFECT = 37,
    CL_DOTA_NPC_CREATE_PARTICLE_EFFECT = 38,
    CL_DOTA_RUBICK_ARCANA_CREATE_PARTICLE_EFFECT = 39,
    DOTA_PET_ITEM_PICKUP = 40,
    DOTA_PET_ITEM_DROP = 41,
    DOTA_SUPPRESS_CONSTANT_LAYER = 42,
    DOTA_PLAY_SOUND_ATTACK_SPECIAL = 43,
    DOTA_CREATE_CLINKZ_ATTACK = 44,
    DOTA_PLAY_SOUND_ATTACK_BACKSTAB = 45,
    DOTA_DIE_PHANTOM_DEATH_PARTICLES = 46,
    DOTA_SWITCH_ATTACK_COMBO = 47,
    EF_NODRAW = 48,
    EF_DRAW = 49,
    DOTA_PLAY_SOUND_ATTACK = 50,
    CL_CREATE_PARTICLE_BRASS = 51,
}

/**
 *
 *
 * https://developer.valvesoftware.com/wiki/Damage_types
 */
declare const enum SourceEngineDamageTypes {
    /**
     * Generic damage.
     */ GENERIC = 0,
    /**
     * Caused by physics interaction. Ignored by airboat drivers.
     */
    CRUSH = 1,
    /**
     * Bullet damage.
     */
    BULLET = 2,
    /**
     * Sharp objects, such as Manhacks or other NPCs attacks.
     */
    SLASH = 4,
    /**
     * Damage from fire.
     */
    BURN = 8,
    /**
     * Hit by a vehicle. This will need to be set for passengers of some vehicle to
     * receive damage.
     */
    VEHICLE = 16,
    /**
     * Fall damage.
     */
    FALL = 32,
    /**
     * Explosion damage. Will be ignored by most vehicle passengers.
     */
    BLAST = 64,
    /**
     * Crowbar damage.
     */
    CLUB = 128,
    /**
     * Electrical damage, shows smoke at the damage position.
     */
    SHOCK = 256,
    /**
     * Sonic damage,used by the Gargantua and Houndeye NPCs.
     */
    SONIC = 512,
    /**
     * Laser.
     */
    ENERGYBEAM = 1024,
    /**
     * Prevent a physics force.
     */
    PREVENT_PHYSICS_FORCE = 2048,
    /**
     * Never creates gibs. Used by the crossbow.
     */
    NEVERGIB = 4096,
    /**
     * Always create gibs.
     */
    ALWAYSGIB = 8192,
    /**
     * Drown damage.
     */
    DROWN = 16384,
    /**
     * Same as DMG_POISON.
     */
    PARALYZE = 32768,
    /**
     * Neurotoxin damage.
     */
    NERVEGAS = 65536,
    /**
     * Poison damage.
     */
    POISON = 131072,
    /**
     * Radiation. Will be ignored by most vehicle passengers.
     */
    RADIATION = 262144,
}

/**
 *
 *
 * https://developer.valvesoftware.com/wiki/Weapon_script#SoundData
 */
declare const enum SourceEngineSoundData {
    EMPTY = 0,
    SINGLE_SHOT = 2,
    DOUBLE_SHOT = 3,
    MELEE_MISS = 4,
    MELEE_HIT = 5,
    MELEE_HIT_WORLD = 6,
    SPECIAL_1 = 9,
    SPECIAL_2 = 10,
    SPECIAL_3 = 11,
}

/**
 * @deprecated Non-normalized enum name. Defined only for library compatibility.
 */
type subquest_text_replace_values_t = SubquestTextReplaceValue;

declare const enum SubquestTextReplaceValue {
    TEXT_REPLACE_CURRENT_VALUE = 0,
    TEXT_REPLACE_TARGET_VALUE = 1,
    NUM_TEXT_REPLACES = 2,
}

declare const enum UnitFilterResult {
    SUCCESS = 0,
    FAIL_FRIENDLY = 1,
    FAIL_ENEMY = 2,
    FAIL_HERO = 3,
    FAIL_CONSIDERED_HERO = 4,
    FAIL_CREEP = 5,
    FAIL_BUILDING = 6,
    FAIL_COURIER = 7,
    FAIL_OTHER = 8,
    FAIL_ANCIENT = 9,
    FAIL_ILLUSION = 10,
    FAIL_SUMMONED = 11,
    FAIL_DOMINATED = 12,
    FAIL_MELEE = 13,
    FAIL_RANGED = 14,
    FAIL_DEAD = 15,
    FAIL_MAGIC_IMMUNE_ALLY = 16,
    FAIL_MAGIC_IMMUNE_ENEMY = 17,
    FAIL_INVULNERABLE = 18,
    FAIL_IN_FOW = 19,
    FAIL_INVISIBLE = 20,
    FAIL_NOT_PLAYER_CONTROLLED = 21,
    FAIL_ATTACK_IMMUNE = 22,
    FAIL_CUSTOM = 23,
    FAIL_INVALID_LOCATION = 24,
    FAIL_DISABLE_HELP = 25,
    FAIL_OUT_OF_WORLD = 26,
    FAIL_NIGHTMARED = 27,
    FAIL_OBSTRUCTED = 28,
}
