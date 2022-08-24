import kotlinx.browser.localStorage
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import org.w3c.dom.get
import org.w3c.dom.set

private var _selectedListStorage: List<String>? = null

var selectedListStorage: List<String>
    get() {
        if (_selectedListStorage == null) _selectedListStorage = localStorage["selectedList"]?.let { kotlinx.serialization.json.Json.decodeFromString(it) } ?: listOf()
        return _selectedListStorage as List<String>
    }
    set(value) {
        _selectedListStorage = value
        localStorage["selectedList"] = kotlinx.serialization.json.Json.encodeToString(value)
    }