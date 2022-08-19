import kotlinx.browser.window
import org.w3c.dom.events.Event
import org.w3c.dom.events.EventListener

fun isSystemInDarkTheme() =
    window.matchMedia("(prefers-color-scheme: dark)").matches
